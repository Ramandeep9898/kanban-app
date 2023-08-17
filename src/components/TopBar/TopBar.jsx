import React from "react";
import "./top-bar.css";
import appLogo from "../../assets/header-logo.png";
import expand from "../../assets/expand.png";
import arrowDown from "../../assets/arrow-down.png";
import calender from "../../assets/calendar-2.png";
import MaskGroup from "../../assets/MaskGroup.png";
import messageQues from "../../assets/message-question.png";
import noti from "../../assets/notification.png";
import search from "../../assets/search-normal.png";
// import expand from "../../assets/expand.png";

export const TopBar = () => {
  return (
    <nav className="top-bar-container flex-row ">
      <div className="top-bar-start-sec space-between">
          <img src={appLogo} alt="" />
      </div>

      <div className="top-bar-end-sec space-between">
        <div className="search-bar-container">
       
        </div>

        <div className=" flex-row gap-24">
          <ul className="top-bar-options  gap-24 flex-row">
            <li className="list-item">
              <img src={noti} alt="" />
            </li>
            <li className="list-item">
              <img src={calender} alt="" />
            </li>
            <li className="list-item">
              <img src={messageQues} alt="" />
            </li>
          </ul>

          <div className=" flex-row gap-24">
            <div>
              <div className=" text-right">Anima Agrawal</div>
              <div className="muted-text text-right">U.P, India</div>
            </div>

            <li className="list-item gap-8 flex-row">
              <img src={MaskGroup} alt="" />
              <img src={arrowDown} alt="" />
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};
