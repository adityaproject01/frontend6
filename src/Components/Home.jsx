import React, { useEffect, useState } from "react";

import { listTaskFun } from "./TaskApi";

import dashboardIcon from "../assets/icons/dashboard.svg";
import taskIcon from "../assets/icons/task.svg";
import messageIcon from "../assets/icons/message.svg";
import notoficationIcon from "../assets/icons/notifications-outline.svg";
import userIcon from "../assets/icons/profile.jpg";
import dropdownIcon from "../assets/icons/caret-down-square.svg";
import clientsIcon from "../assets/icons/users.svg";
import closeIcon from "../assets/icons/close.svg";
import menuIcon from "../assets/icons/menu.svg";
import billIcon from "../assets/icons/invoice.svg";

import HighPriority from "./HighPriority";
import NormalTask from "./NormalTask";
import MediumPriority from "./MediumPriority";
import CreateTask from "./CreateTask";
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listTaskData, setListTaskData] = useState(null);
  const [toggleBtn, setToggleBtn] = useState(false);
  useEffect(() => {
    listTaskFun(setListTaskData);
  }, []);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const refreshTaskList = () => {
    listTaskFun(setListTaskData);
  };
  function handleToggleOn() {
    setToggleBtn(true);
  }
  function handleToggleOff() {
    setToggleBtn(false);
  }
  return (
    <div className="container-fluid ">
      <div className=" col-lg-12 row">
        <img
          className="col-lg-1"
          onClick={handleToggleOn}
          src={menuIcon}
          alt="close icon"
        />

        {toggleBtn ? (
          <div className="leftsm">
            <img
              src={closeIcon}
              alt="close icon"
              className="col-lg-1"
              onClick={handleToggleOff}
            />
            <div className="rightContainer1sm">
              <div className="rightContainer1Rightsm">
                <img
                  src={userIcon}
                  alt="notofocation icon"
                  className="col-lg-1"
                />
                <img
                  src={closeIcon}
                  className="closeIcon1"
                  alt="close icon"
                  onClick={handleToggleOff}
                />
              </div>
            </div>
            <div className="rightContainer1sm">
              <div className="rightContainer1Rightsm">
                <img src={dropdownIcon} alt="dropdown icon" />

                <p>Aditya</p>

                <img src={notoficationIcon} alt="notofocation icon" />
              </div>
            </div>
            <div className="menus">
              <div href="#" className="btn iconSet">
                <img src={dashboardIcon} alt="dashboardIcon" />

                <span>Dashboard</span>
              </div>
              <div href="#" className="btn active iconSet ">
                <img src={taskIcon} alt="taskIcon" />

                <span>My Task</span>
              </div>
              <div href="#" className="btn iconSet ">
                <img src={clientsIcon} alt="clintIcon" />

                <span>Clients</span>
              </div>
              <div href="#" className="btn iconSet ">
                <img src={messageIcon} alt="messageIcon" />

                <span>Message</span>
              </div>
              <div href="#" className="btn iconSet ">
                <img src={billIcon} alt="messageIcon" />

                <span>Billing</span>
              </div>
            </div>
            <div className="leftDown">
              <div className="upgrade">
                <button className="uppgradeBtn"> Upgrade</button>
                <p>Upgrade to pro for more feature</p>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* non mobile */}
        <div className="col-lg-2 col-xl-2 col-xxl-2">
          <img
            src={closeIcon}
            className="col-lg-1"
            alt="close icon"
            onClick={handleToggleOff}
          />

          <div className="col-lg-2">
            <div className="rightContainer1Rightsm">
              <img
                src={userIcon}
                className="col-lg-1"
                alt="notofocation icon"
              />
              <img
                src={closeIcon}
                className="col-1"
                alt="close icon"
                onClick={handleToggleOff}
              />
            </div>
          </div>

          <nav className="col-lg-12 d-flex row gap-4">
            <a href="#d" className="col-lg-12 d-flex h-25 ">
              <img
                src={dashboardIcon}
                className="col-lg-1"
                alt="dashboardIcon"
              />
              <span className="ps-3">Dashboard</span>
            </a>
            <a href="#s" className="col-lg-12 d-flex h-25">
              <img src={taskIcon} className="col-lg-1 active" alt="taskIcon" />
              <span className="ps-3">My Task</span>
            </a>
            <a href="#d" className="col-lg-12 d-flex">
              <img src={clientsIcon} className="col-lg-1" alt="clintIcon" />
              <span className="ps-3">Clients</span>
            </a>
            <a href="#c" className="col-lg-12 d-flex">
              <img src={messageIcon} className="col-lg-1" alt="messageIcon" />
              <span className="ps-3">Message</span>
            </a>
            <a href="#d" className="col-lg-12 d-flex ">
              <img src={billIcon} className="col-lg-1" alt="messageIcon" />
              <span className="ps-3">Billing</span>
            </a>
          </nav>
          {/* <div className="leftDown">
            <div className="upgrade">
              <button className="uppgradeBtn">Upgrade</button>
              <p>Upgrade to pro for more feature</p>
            </div>
          </div> */}
        </div>
        <div className="col-lg-9 col-xl-9 col-xxl-9 mt-3">
          <div className="d-lg-flex col-lg-12 justify-content-lg-between">
            <div className="col-lg-6">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search" />
                <button class="btn btn-success" type="submit">
                  Go
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="col-lg-1"
                src={notoficationIcon}
                alt="notofocation icon"
              />
              <img
                src={userIcon}
                className="col-lg-1 rounded-5"
                alt="notofocation icon"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="col-lg-12">
              <button onClick={openModal}>Create Task</button>
              <CreateTask
                isopen={isModalOpen}
                onclose={closeModal}
                refreshTasks={refreshTaskList}
              />
            </div>

            <div className="col-lg-12 row">
              <div className="col-lg-4">
                <p style={{ padding: "5px" }}>Priority Task</p>
                <HighPriority
                  listTaskData={listTaskData}
                  refreshTasks={refreshTaskList}
                />
              </div>
              <div className="col-lg-4">
                <p style={{ padding: "5px" }}>Medium Task</p>
                <MediumPriority
                  listTaskData={listTaskData}
                  refreshTasks={refreshTaskList}
                />
              </div>
              <div className="col-lg-4">
                <p style={{ padding: "5px" }}>Normal Task</p>
                <NormalTask
                  listTaskData={listTaskData}
                  refreshTasks={refreshTaskList}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
