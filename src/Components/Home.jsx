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
import toggleIcon from "../assets/icons/menu.svg";
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
    <div className="container-fluid d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center">
      <div className=" col-lg-12 col-xl-12 col-12 col-md-12 col-sm-12 row d-flex d-sm-flex d-lg-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center ">
        <div className="col-lg-2 col-12 col-md-12 col-sm-12 col-xl-2 ">
          <div className="vm">
            {toggleBtn ? (
              <>
                <img src={closeIcon} onClick={handleToggleOff} alt="" />
                <nav className=" col-lg-12 mt-5 d-flex row gap-4 nav nav-pills nav-fill">
                  <a
                    href="#a"
                    className=" nav-item nav-link col-lg-12 d-flex h-25 "
                  >
                    <img
                      src={dashboardIcon}
                      className="col-lg-1"
                      alt="dashboardIcon"
                    />
                    <span className="ps-3 ">Dashboard</span>
                  </a>
                  <a
                    href="#a"
                    className="active nav-item nav-link col-lg-12 d-flex h-25 "
                  >
                    <img
                      src={taskIcon}
                      className="col-lg-1"
                      alt="dashboardIcon"
                    />
                    <span className="ps-3 ">My Task </span>
                  </a>

                  <a href="#a" className=" nav-item nav-link col-lg-12 d-flex">
                    <img
                      src={clientsIcon}
                      className="col-lg-1"
                      alt="clintIcon"
                    />
                    <span className="ps-3">Clients</span>
                  </a>
                  <a href="#a" className=" nav-item nav-link col-lg-12 d-flex">
                    <img
                      src={messageIcon}
                      className="col-lg-1"
                      alt="messageIcon"
                    />
                    <span className="ps-3">Message</span>
                  </a>
                  <a href="#a" className=" nav-item nav-link col-lg-12 d-flex ">
                    <img
                      src={billIcon}
                      className="col-lg-1"
                      alt="messageIcon"
                    />
                    <span className="ps-3">Billing</span>
                  </a>
                </nav>
              </>
            ) : (
              <>
                <img src={toggleIcon} onClick={handleToggleOn} alt="" />
              </>
            )}
          </div>
          <div className="nm">
            <nav className=" col-lg-12 col-xl-12 mt-5 d-flex row gap-4 nav nav-pills nav-fillc">
              <a
                href="#a"
                className=" nav-item nav-link col-lg-12 d-flex h-25 "
              >
                <img
                  src={dashboardIcon}
                  className="col-lg-1"
                  alt="dashboardIcon"
                />
                <span className="ps-3 ">Dashboard</span>
              </a>
              <a
                href="#a"
                className="col-lg-12 d-flex h-25 nav-item nav-link active"
              >
                <img
                  src={taskIcon}
                  className="col-lg-1 active"
                  alt="taskIcon"
                />
                <span className="ps-3 list-group-item active">My Task</span>
              </a>
              <a href="#a" className=" nav-item nav-link col-lg-12 d-flex">
                <img src={clientsIcon} className="col-lg-1" alt="clintIcon" />
                <span className="ps-3">Clients</span>
              </a>
              <a href="#a" className=" nav-item nav-link col-lg-12 d-flex">
                <img src={messageIcon} className="col-lg-1" alt="messageIcon" />
                <span className="ps-3">Message</span>
              </a>
              <a href="#a" className=" nav-item nav-link col-lg-12 d-flex ">
                <img src={billIcon} className="col-lg-1" alt="messageIcon" />
                <span className="ps-3">Billing</span>
              </a>
            </nav>
          </div>
        </div>
        <div className="col-lg-9 p-0 col-xl-9  col-12  col-sm-12   mt-3">
          <div className="  row mb-3 pb-3 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex col-12  col-sm-12 col-lg-12 col-md-12 col-xl-12    justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center">
            <div className="col-lg-7 col-xl-7   col-12 col-sm-12 col-md-12">
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
            <div className="col-12 mt-2 col-lg-5 col-sm-12  d-flex justify-content-between justify-content-sm-between  justify-content-lg-end">
              <img
                className="col-lg-1 col-sm-1 col-1"
                src={notoficationIcon}
                alt="notofocation icon"
              />
              <img
                src={userIcon}
                className="col-lg-1 col-1 rounded-5 col-sm-1"
                alt="notofocation icon"
              />
            </div>
          </div>
          <div className="col-lg-12 col-xl-12 col-md-12 col-12 col-sm-12">
            <div className="col-lg-12 col-xl-12 col-sm-12 col-md-12 col-12 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-between justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between align-items-lg-center p-2 ">
              <p className="m-0">My Task</p>
              <button
                onClick={openModal}
                type="button"
                className=" btn btn-primary justify-content-between align-items-center d-flex  d-sm-flex  align-item-sm-center justify-content-sm-between  d-md-flex  align-item-md-center justify-content-md-between d-lg-flex align-items-lg-center justify-content-lg-between"
              >
                <span>New Task</span>
                <img src={plusIcon} alt="" />
              </button>
            </div>

            <div
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

            <div className="col-lg-12 col-sm-12 col-md-12 col-12 overflow-auto  d-flex ">
              <div className="col-lg-4 col-12  d-flex justify-content-lg-center justify-content-center  p-1 rounded-3  ">
                <div className="overflow-auto col-lg-12 col-12  p-0 rounded-3  priority">
                  <p className="p-3 fs-3 fw-bold">Priority Task</p>
                  <HighPriority
                    listTaskData={listTaskData}
                    refreshTasks={refreshTaskList}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-12 d-flex justify-content-lg-center  p-1 rounded-3  ">
                <div className="overflow-auto col-lg-12 col-12 p-0 rounded-3 medium">
                  <p className="p-3 fs-3 fw-bold ">Medium Task</p>
                  <MediumPriority
                    listTaskData={listTaskData}
                    refreshTasks={refreshTaskList}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-12 d-flex justify-content-lg-center  p-1 rounded-3  ">
                <div className="overflow-auto col-lg-12  p-0 normal">
                  <p className="p-3 fw-bold fs-3">Normal Task</p>
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
