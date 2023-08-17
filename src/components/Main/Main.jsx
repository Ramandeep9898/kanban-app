import "./main.css";
import { Todo } from "./Todo";
import edit from "../../assets/Group.png";
import search from "../../assets/search-normal.png";
import link from "../../assets/link.png";
import add from "../../assets/add-square.png";
import kid1 from "../../assets/kid1.png";
import kid2 from "../../assets/kid2.png";
import kid3 from "../../assets/kid3.png";
import kid4 from "../../assets/kid4.png";

export const Main = () => {
  return (
    <main className="main-wrapper">
      <div className=" space-between mb-40">
        <div className="main-heading flex-row gap-24">
          <h1 className="heading">Manage: Ready, In Progress, Testing, and Done.</h1> 
        </div>

        <div className="end-div flex-row gap-8">
          <button className="flex-row link-btn gap-8">
            <img src={add} alt="" />
            invite
          </button>
          <div className="flex-row">
            <img src={kid1} className="" alt="" />
            <img src={kid2} className="ml-4neg" alt="" />
            <img src={kid3} className="ml-4neg" alt="" />
            <img src={kid4} className="ml-4neg" alt="" />
            <div className="ml-4neg pic">+2</div>
          </div>
        </div>
      </div>


        <Todo />
    </main>
  );
};
