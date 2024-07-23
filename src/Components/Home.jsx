import React, { useEffect, useState } from "react";
import "./style1.css";
import { listTaskFun } from "./TaskApi";
import dashboardIcon from "../assets/icons/dashboard.svg";
import taskIcon from "../assets/icons/task.svg";
import messageIcon from "../assets/icons/message.svg";
import notoficationIcon from "../assets/icons/notifications-outline.svg";
import userIcon from "../assets/icons/profile.jpg";
// import dropdownIcon from "../assets/icons/caret-down-square.svg";
import clientsIcon from "../assets/icons/users.svg";
import closeIcon from "../assets/icons/close.svg";
import plusIcon from "../assets/icons/plus.png";
import billIcon from "../assets/icons/invoice.svg";

import HighPriority from "./HighPriority";
import NormalTask from "./NormalTask";
import MediumPriority from "./MediumPriority";
import CreateTask from "./CreateTask";
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listTaskData, setListTaskData] = useState(null);
  // const [toggleBtn, setToggleBtn] = useState(false);
  useEffect(() => {
    listTaskFun(setListTaskData);
  }, []);
  const openModal = () => {
    setIsModalOpen(true);
  };
  let setToggleBtn = null;
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const refreshTaskList = () => {
    listTaskFun(setListTaskData);
  };
  // function handleToggleOn() {
  //   setToggleBtn(true);
  // }
  function handleToggleOff() {
    setToggleBtn(false);
  }
  return (
    <div className="container-fluid d-flex justify-content-lg-center">
      <div className=" col-lg-12 row d-flex justify-content-lg-center">
        <div className="col-lg-2 ">
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

          <nav className="col-lg-12 d-flex row gap-4 nav nav-pills nav-fill">
            <a href="#d" className=" nav-item nav-link col-lg-12 d-flex h-25 ">
              <img
                src={dashboardIcon}
                className="col-lg-1"
                alt="dashboardIcon"
              />
              <span className="ps-3 ">Dashboard</span>
            </a>
            <a
              href="#s"
              className="col-lg-12 d-flex h-25 nav-item nav-link active"
            >
              <img src={taskIcon} className="col-lg-1 active" alt="taskIcon" />
              <span className="ps-3 list-group-item active">My Task</span>
            </a>
            <a href="#d" className=" nav-item nav-link col-lg-12 d-flex">
              <img src={clientsIcon} className="col-lg-1" alt="clintIcon" />
              <span className="ps-3">Clients</span>
            </a>
            <a href="#c" className=" nav-item nav-link col-lg-12 d-flex">
              <img src={messageIcon} className="col-lg-1" alt="messageIcon" />
              <span className="ps-3">Message</span>
            </a>
            <a href="#d" className=" nav-item nav-link col-lg-12 d-flex ">
              <img src={billIcon} className="col-lg-1" alt="messageIcon" />
              <span className="ps-3">Billing</span>
            </a>
          </nav>
        </div>
        <div className="col-lg-9  mt-3">
          <div className="mb-3 d-lg-flex col-lg-12 justify-content-lg-between">
            <div className="col-lg-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <button className="btn btn-success" type="submit">
                  Go
                </button>
              </div>
            </div>
            <div className="col-lg-5 d-flex  justify-content-lg-end">
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
            <div className="col-lg-12 d-flex justify-content-lg-between align-items-lg-center ">
              <p className="m-0">My Task</p>
              <button
                onClick={openModal}
                type="button"
                className="btn btn-primary d-flex align-items-lg-center justify-content-lg-between"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <span>New Task</span>
                <img src={plusIcon} alt="" />
              </button>
            </div>

            <div
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
              className="modal "
              tabIndex="-1"
              style={{ display: isModalOpen ? "block" : "none" }}
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header ">
                    <h5 className="modal-title">New Task</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={closeModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <CreateTask
                      closeModal={closeModal}
                      refreshTaskList={refreshTaskList}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 row">
              <div className="col-lg-4 d-flex justify-content-lg-center  p-1 rounded-3  ">
                <div className="col-lg-12 p-0 rounded-3  priority">
                  <p className="p-3">Priority Task</p>
                  <HighPriority
                    listTaskData={listTaskData}
                    refreshTasks={refreshTaskList}
                  />
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-lg-center  p-1 rounded-3  ">
                <div className="col-lg-12 p-0 rounded-3 medium">
                  <p className="p-3  ">Medium Task</p>
                  <MediumPriority
                    listTaskData={listTaskData}
                    refreshTasks={refreshTaskList}
                  />
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-lg-center   p-1 rounded-3  ">
                <div className="col-lg-12   p-0 normal">
                  <p className="p-3">Normal Task</p>
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
    </div>
  );
};

export default Home;
