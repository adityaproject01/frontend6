import React, { useEffect, useState } from "react";

import deleteIcon from "../assets/icons/trash-delete-bin.svg";
// import viewmoreIcon from "../assets/icons/chevron-right.svg";
import ModifyTask from "./ModifyTask";
import { deleteTaskFun } from "./TaskApi";
import editIcon from "../assets/icons/edit1.svg";
const MediumPriority = ({ listTaskData, refreshTasks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (listTaskData?.tasks) {
      setTasks(listTaskData.tasks.filter((item) => item.priority === 2));
    } else {
      setTasks([]);
    }
  }, [listTaskData]);

  const openModal = (index) => {
    setSelectedTaskIndex(index);
    setIsModalOpen(true);
  };

  const deleteItem = (taskId) => {
    deleteTaskFun(taskId).then(() => {
      const updatedTasks = tasks.filter((item) => item.id !== taskId);
      setTasks(updatedTasks);
    });
  };

  const onClose = () => {
    setIsModalOpen(false);
    setSelectedTaskIndex(null);
  };

  return (
    <div className="d-flex flex-wrap overflow-scroll h-80 justify-content-lg-center">
      {tasks.length > 0 ? (
        tasks.map((item, index) => (
          <div
            key={index + 1}
            className=" bg-white rounded-3 d-flex justify-content-lg-center col-lg-11 row mb-3"
          >
            <div className="m-2 col-lg-12 d-flex justify-content-lg-between align-items-center">
              <div>{item.assigned_name}</div>
              <div className=" d-flex align-items-lg-center">
                <img
                  src={editIcon}
                  onClick={() => openModal(index)}
                  alt="edit icon"
                />

                {selectedTaskIndex === index && (
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
                          <h5 className="modal-title">Task Details</h5>
                          <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                          ></button>
                        </div>
                        <div className="modal-body">
                          <ModifyTask
                            listTaskData={listTaskData}
                            message={item.message}
                            due_date={item.due_date}
                            created_on={item.created_on}
                            priority={item.priority}
                            assigned_to={item.assigned_name}
                            id={item.id}
                            refreshTasks={refreshTasks}
                            onClose={onClose}
                            assigned_name={item.assigned_name}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="col-lg-2">
                  <img
                    src={deleteIcon}
                    onClick={() => deleteItem(item.id)}
                    alt="deleteIcon"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className=" text-break mt-3 col-lg-12">
              <p className=" messagePara overflow-auto  ">{item.message}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No high priority tasks found.</p>
      )}
    </div>
  );
};

export default MediumPriority;
