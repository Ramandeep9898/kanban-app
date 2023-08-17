import "./side-bar.css";
import home from "../../assets/category.png";
import message from "../../assets/message.png";
import task from "../../assets/task-square.png";
import profile from "../../assets/profile-2user.png";
import setting from "../../assets/setting-2.png";
import add from "../../assets/add-square.png";
import lamp from "../../assets/lamp-on.png";

export const SideBar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-options">
        <li className="sidebar-item">
          <img src={home} alt="" />
        </li>
        <li className="sidebar-item">
          <img src={message} alt="" />
        </li>
        <li className="sidebar-item">
          <img src={task} alt="" />
        </li>
        <li className="sidebar-item">
          <img src={profile} alt="" />
        </li>
        <li className="sidebar-item">
          <img src={setting} alt="" />
        </li>
      </ul>
      <div className="divider-hr"></div>

      <ul className="sidebar-options">
        <li className="sidebar-item">
          <img src={home} alt="" />
        </li>
        <li className="sidebar-item">
          <img src={message} alt="" />
        </li>
        <li className="sidebar-item">
          <img src={task} alt="" />
        </li>
        <li className="sidebar-item">
          <img src={profile} alt="" />
        </li>
        <li className="sidebar-item">
          <img src={setting} alt="" />
        </li>
      </ul>
      <div className="divider-hr"></div>

      <ul className="sidebar-options">
        <li className="sidebar-item">
          <img src={home} alt="" />
        </li>
        <li className="sidebar-item">
          <img src={message} alt="" />
        </li>
        <li className="sidebar-item">
          <img src={task} alt="" />
        </li>
        <li className="sidebar-item">
          <img src={profile} alt="" />
        </li>
        <li className="sidebar-item">
          <img src={setting} alt="" />
        </li>
      </ul>
      <div className="divider-hr"></div>

      

      {/* <div className="sidebar-heading space-between">
        MY PROJECTS
        <img src={add} alt="" />
      </div>

      <ul className="sidebar-projects">
        <li className="project flex-row active">
          <div className="badge badge-green"></div>
          Mobile App
        </li>
        <li className="project flex-row">
          <div className="badge badge-orange"></div>
          Website Redesign
        </li>
        <li className="project flex-row">
          <div className="badge badge-purple"></div>
          Design System
        </li>
        <li className="project flex-row">
          <div className="badge badge-blue"></div>
          Wireframes
        </li>
      </ul>

      <div className="review">
        <div className="review-bulb">
          <div className="">
            <img src={lamp} alt="" />
          </div>
        </div>
        <div className="review-heading">Thoughts Time</div>
        <p className="review-abt">
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </p>
        <button className="btn-ghost">Write a message</button>
      </div> */}
    </div>
  );
};
