import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
// import "../style.css";
import { listUserFun, createTasksFun } from "./TaskApi";

const CreateTask = ({ closeModal, refreshTaskList }) => {
  const [userListData, setUserListData] = useState({ users: [] });
  const [taskCreated, setTaskCreated] = useState(false);
  const [getdue_date, setGetdue_date] = useState("");

  const [createTaskDetails, setCreateTaskDetails] = useState({
    message: "",
    due_date: "",
    priority: "",
    assigned_to: "",
  });
  const [errors, setErrors] = useState({
    message: "",
    due_date: "",
    priority: "",
    assigned_to: "",
  });

  useEffect(() => {
    listUserFun(setUserListData);
  }, [closeModal]);

  function handleGetName(event) {
    setCreateTaskDetails({ ...createTaskDetails, message: event.target.value });
    setErrors({ ...errors, message: "" });
  }

  // function handleGetDate(event) {
  //   const inputDate = event.target.value;
  //   if (!inputDate) {
  //     setErrors({ ...errors, due_date: "Due date is required" });
  //     return;
  //   } else {
  //     setErrors({ ...errors, due_date: "" });
  //   }

  //   const dateObj = new Date(inputDate);
  //   const year = dateObj.getFullYear();
  //   const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  //   const day = ("0" + dateObj.getDate()).slice(-2);
  //   let hour = dateObj.getHours();
  //   const minute = ("0" + dateObj.getMinutes()).slice(-2);
  //   let second = 11;

  //   if (hour === 0) hour = 12;
  //   const formattedTime = `${hour}:${minute}:${second}`;

  //   setCreateTaskDetails({
  //     ...createTaskDetails,
  //     due_date: `${year}-${month}-${day} ${formattedTime}`,
  //   });
  // }
  function handleDueDate(e) {
    setGetdue_date(e.target.value);
    formatDate(getdue_date);
  }
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);
    let dateTimes = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    setCreateTaskDetails({
      ...createTaskDetails,
      due_date: dateTimes,
    });
  };

  function handleGetTaskType(event) {
    setCreateTaskDetails({
      ...createTaskDetails,
      priority: event.target.value,
    });
    setErrors({ ...errors, priority: "" });
  }

  function handleGetUser(event) {
    const selectedIndex = event.target.value;
    setCreateTaskDetails({
      ...createTaskDetails,
      assigned_to: userListData.users[selectedIndex].id,
    });
    setErrors({ ...errors, assigned_to: "" });
  }

  const handleCreateTask = async (event) => {
    event.preventDefault();

    let formIsValid = true;
    const newErrors = { ...errors };

    if (!createTaskDetails.message.trim()) {
      newErrors.message = "Please fill the message box";
      formIsValid = false;
    } else {
      newErrors.message = "";
    }

    if (!createTaskDetails.due_date) {
      newErrors.due_date = "Please select the Due date";
      formIsValid = false;
    } else {
      newErrors.due_date = "";
    }

    if (!createTaskDetails.priority.trim()) {
      newErrors.priority = "Please select the Priority";
      formIsValid = false;
    } else {
      newErrors.priority = "";
    }

    if (!createTaskDetails.assigned_to) {
      newErrors.assigned_to = "Please select the Assignee";
      formIsValid = false;
    } else {
      newErrors.assigned_to = "";
    }

    setErrors(newErrors);

    if (formIsValid) {
      try {
        createTasksFun(createTaskDetails);
        setTaskCreated(true);
        setCreateTaskDetails({
          message: "",
          due_date: "",
          priority: "",
          assigned_to: "",
        });
        setTimeout(() => {
          setTaskCreated(false);
          refreshTaskList();
          closeModal();
        }, 1000);
      } catch (error) {
        console.error("Error creating task:", error);
      }
    }
  };
  console.log(createTaskDetails);
  return (
    <div className="col-lg-12 col-sm-12 col-md-12 col-12">
      <div className="col-lg-12 col-sm-12 col-md-12 col-12 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-between justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between ">
        <div className="">
          <form
            className=" row  d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-between justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between "
            onSubmit={handleCreateTask}
          >
            <div className="p-4 row ">
              <div className=" col-lg-12 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-between justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between ">
                <label>Message</label>
                <textarea
                  rows={5}
                  id="name"
                  className="col-10 resize-none"
                  type="textarea"
                  value={createTaskDetails.message}
                  onChange={handleGetName}
                />
              </div>

              <span className="text-danger">
                {errors.message && <p className="error">{errors.message}</p>}
              </span>
            </div>

            <div className=" p-4 row ">
              <div className="d-flex  d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-between justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between ">
                <label>Date</label>
                <input
                  type="datetime-local"
                  // value={}
                  onChange={handleDueDate}
                />
              </div>
              <span className="text-danger">
                {errors.due_date && <p className="error">{errors.due_date}</p>}
              </span>
            </div>
            <div className=" p-4 row ">
              <div className=" d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-between justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between ">
                <label>Priority</label>
                <select
                  value={createTaskDetails.priority}
                  onChange={handleGetTaskType}
                >
                  <option value="" disabled>
                    Choose Level
                  </option>
                  <option value="1">Normal Task</option>
                  <option value="2">Medium Task</option>
                  <option value="3">High Priority Task</option>
                </select>
              </div>
              <span className="text-danger">
                {errors.priority && <p className="error">{errors.priority}</p>}
              </span>
            </div>
            <div className="p-4 row ">
              <div className=" d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-between justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between ">
                <label>Assign To</label>
                <select
                  className="custom-select custom-select-lg mb-3"
                  onChange={handleGetUser}
                >
                  <option selected disabled>
                    Select Assignee
                  </option>

                  {userListData.users.map((item, index) => (
                    <option key={item.id} value={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <span className="text-danger">
                {errors.assigned_to && (
                  <p className="error">{errors.assigned_to}</p>
                )}
              </span>
            </div>
            <div className="p-4 d-flex justify-content-lg-between">
              <button className="btn btn-secondary" type="submit">
                Create
              </button>
              <span>{taskCreated && <p>Task Created!</p>}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
CreateTask.propTypes = {
  isopen: PropTypes.bool.isRequired,
  onclose: PropTypes.func.isRequired,
  refreshTasks: PropTypes.func.isRequired,
};

export default CreateTask;
