import { useEffect } from "react";
import { useRef, useState } from "react";
import add from "../../assets/add-square.png";
import axios from "axios";
import edit from "../../assets/Group.png";
import search from "../../assets/search-normal.png";
import link from "../../assets/link.png";
import filter from "../../assets/filter.png";
import arrowDown from "../../assets/arrow-down.png";
import calendar from "../../assets/calendar-2.png";

export const Todo = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [newList, setNewList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const [assigneeList, setAssigneeList] = useState([]);

  // not important
  const [dragging, setDragging] = useState(false);
  const dragInfo = useRef();
  const dragNode = useRef();

  useEffect(() => {
    async function getData() {
      const dataTemp = await axios.get("https://gcp-mock.apiwiz.io/v1/tasks", {
        headers: {
          "x-tenant": "b4349714-47c7-4605-a81c-df509fc7e653",
        },
      });
      setList(dataTemp.data);
      setFilteredList(dataTemp.data);
    }
    getData();
  }, []);

  const handleInput = (e) => {
    setInputValue(e.target.value);

    const value = e.target.value;
    const searchFilter = list.filter((ele) =>
      ele.name.toLowerCase().includes(value)
    );
    console.log(searchFilter, "searchFilter");
    setFilteredList(searchFilter);
  };

  useEffect(() => {
    const temp = Array.from(new Set(list.map((item) => item.assignee)));
    setAssigneeList(temp);
  }, [list]);

  const filterByAssignee = (assignee) => {
    const temp = list.filter(
      (ele) => ele.assignee.toLowerCase() === assignee.toLowerCase()
    );
    setFilteredList(temp);
  };

  const clearAll = () => {
    // setNewList(filteredList);
    setFilteredList(list);
    // setAssigneeList(assigneeList);
  };

  useEffect(() => {
    console.log(filteredList);
    function sortAndGroupByStatus() {
      const groupedByStatus = {};
      for (const item of filteredList) {
        const status = item.status; // Use item.status instead of list.status
        if (!groupedByStatus[status]) {
          groupedByStatus[status] = { status, items: [] };
        }
        groupedByStatus[status].items.push(item);
      }
      const result = Object.values(groupedByStatus);
      setNewList(result);
    }
    sortAndGroupByStatus();
  }, [list, filteredList]);

  // not important
  const handleDragStart = (e, params) => {
    // console.log("drag start", params);
    dragInfo.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handlerDragEnd);
    setDragging(true);
  };

  const handleDragEnter = (e, params) => {
    // console.log("Entering a drag target", params);
    const currentItem = dragInfo.current;
    if (e.target !== dragNode.current) {
      // console.log("Target is NOT the same as dragged item");
      setNewList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        console.log("Target is NOT the same as dragged item", {
          newList,
          grpI: params.grpI,
          id: newList[params.grpI],
          id2: newList[currentItem.grpI],
          id3: currentItem.grpI,
        });

        newList[params.grpI].items.splice(
          params.itemI,
          0,
          newList[currentItem.grpI]?.items.splice(currentItem.itemI, 1)[0]
        );
        dragInfo.current = params;
        return newList;
      });
    }
  };

  const handlerDragEnd = () => {
    console.log("ending drag");
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handlerDragEnd);
    dragInfo.current = null;
    dragNode.current = null;
  };
  const getPriority = (priority) => {
    if (priority === "Low") {
      return "badge-square low mb-4";
    } else if (priority === "High") {
      return "badge-square high mb-4";
    } else if (priority === "Medium") {
      return "badge-square completed mb-4";
    }
  };

  const getStyles = (item) => {
    if (
      dragInfo.current.grpI === item.grpI &&
      dragInfo.current.itemI === item.itemI
    ) {
      return "card mb-20";
    }
    return "card mb-20";
  };

  return (
    <>
      <div className="space-between mb-40">
        <div className="flex-row gap-14">
          <div className="search-bar-container">
            <img src={search} alt="" className="search-icon" />
            <input
              value={inputValue}
              onChange={(e) => handleInput(e)}
              type="text"
              className="top-bar-search"
              placeholder="Search For any task..."
            />
          </div>
        </div>

        <div className="flex-row gap-24">
          <div className="">
            <button
              className="outline-btn filter-btn flex-row"
              onClick={() => setDropDown((prev) => !prev)}
            >
              <img src={filter} alt="" />
              Assignee
              <img src={arrowDown} alt="" />
            </button>
            {dropDown && (
              <div className="drop-down">
                <button onClick={() => clearAll()}>clear all</button>

                {assigneeList.map((ele) => (
                  <div
                    className="drop-down-item"
                    onClick={() => filterByAssignee(ele)}
                  >
                    {ele}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="outline-btn  flex-row">
            <img src={calendar} alt="" />
            Today
            <img src={arrowDown} alt="" />
          </button>
        </div>
      </div>
      <div className="section-main ">
        {newList.length &&
          newList.map((dataInfo, grpI) => (
            <>
              <div
                className="section"
                onDragEnter={
                  dragging && !dataInfo.items.length
                    ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                    : null
                }
              >
                <div className="space-between mb-20">
                  <div className="flex-row gap-8">
                    <div className="badge badge-blue"></div>
                    <div className="sec-heading"> {dataInfo.status} </div>
                  </div>
                  <img src={add} alt="" />
                </div>
                {dataInfo.status === "Ready" ? (
                  <div className="process-bar mb-30"></div>
                ) : null}
                {dataInfo.status === "In Progress" ? (
                  <div className="process mb-30"></div>
                ) : null}
                {dataInfo.status === "Done" ? (
                  <div className="done mb-30"></div>
                ) : null}
                {dataInfo.status === "Testing" ? (
                  <div className="testing mb-30"></div>
                ) : null}

                {dataInfo.items.map((ele, itemI) => (
                  <div
                    className={
                      dragging ? getStyles({ grpI, itemI }) : "card mb-20"
                    }
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, { grpI, itemI })}
                    onDragEnter={
                      dragging
                        ? (e) => {
                            handleDragEnter(e, { grpI, itemI });
                          }
                        : null
                    }
                    key={ele.id}
                  >
                    <div className={getPriority(ele.priority)}>
                      {ele.priority}
                    </div>
                    <div className="card-heading mb-6">{ele.name}</div>
                    <div className="card-subheading mb-8">{ele.summary}</div>

                    <div className="card-footer space-between">
                      <div className="logo-muted-btn ">
                        <p>Assigned by: {ele.assignee}</p>
                      </div>

                      <div className="flex-row gap-14">
                        <button className="logo-muted-btn flex-row gap-4">
                          {ele.type}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
      </div>
    </>
  );
};
