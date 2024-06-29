import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASE_URL } from './Host.jsx';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function Inbox() {
    const [text, setText] = useState("");
    // const [updateText, setUpdateText] = useState("");
    // const [updateId, setUpdateId] = useState("");
    const [tasks, setTasks] = useState([]);
    const [dailytasks, setDailyTasks] = useState([]);
    const [error, setError] = useState("");
    const [updatedTasks, setUpdatedTasks] = useState({});
    const [updatedDailyTasks, setUpdatedDailyTasks] = useState({});
    const [favourite,setFavourite] = useState(0)

    useEffect(() => {
        fetchTasks();
        fetchDailyTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const username = localStorage.getItem('username');
            const response = await axios.post(`${BASE_URL}/api/getTodayTasks`, {
                username: username
            });
            console.log(response.data)
            if (response.data.success) {
                setTasks(response.data.tasks);
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error("Error fetching tasks:", error);
            setError('An error occurred. Please try again.');
        }
    };


    const fetchDailyTasks = async () => {
        try {
            const username = localStorage.getItem('username');
            const response = await axios.post(`${BASE_URL}/api/getTodayDailyTask`, {
                username: username
            });
            console.log("DailyTask", response.data)
            if (response.data.status) {
                setDailyTasks(response.data.tasks);
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error("Error fetching tasks:", error);
            setError('An error occurred. Please try again.');
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(favourite)
            const username = localStorage.getItem('username');
            // if (!username) {
            //     throw new Error('Username not found in localStorage');
            // }
            const response = await axios.post(`${BASE_URL}/api/addtodayTask`, {
                username: username,
                task: text,
                important: favourite
            })
            console.log(response.data)
            if (response.data.success) {
                setText("");
                setFavourite(0);
                fetchTasks();

            }
        } catch (error) {
            console.error("Error during login:", error);
            setError('An error occurred. Please try again.');
        }
    }

    const handleUpdateChange = (taskId, value) => {
        setUpdatedTasks({
            ...updatedTasks,
            [taskId]: value
        });
    };


    const handleUpdateChangeForDaily = async (taskId, value) => {
        setUpdatedDailyTasks({
            ...updatedDailyTasks,
            [taskId]: value
        })
    };

    const handleUpdate = async (taskId) => {
        try {
            let updatedTaskText = updatedTasks[taskId];
            if (updatedTaskText === undefined) {
                const originalTask = tasks.find(task => task.id === taskId);
                updatedTaskText = count > 0 ? originalTask.newTask : originalTask.dailytask;
            }
            const response = await axios.post(`${BASE_URL}/api/updateTask`, {
                id: taskId,
                task: updatedTaskText
            });
            if (response.data.success) {
                fetchTasks(); // Refresh tasks after update
                // Optionally clear updatedTasks state after successful update
                setUpdatedTasks({}); // Clear updatedTasks state
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error("Error updating task:", error);
            setError('An error occurred. Please try again.');
        }
    };

    const handleUpdateDailyTask = async (taskId, count) => {
        try {
            let updatedTaskText = updatedDailyTasks[taskId];
            if (updatedTaskText === undefined) {
                const originalTask = dailytasks.find(task => task.id === taskId);
                updatedTaskText = count > 0 ? originalTask.newTask : originalTask.dailytask;
            }
            console.log(updatedTaskText)
            let url = `${BASE_URL}/api/insertTodayDailyTask`;
            console.log(count, count > 0)
            if (count > 0) {
                url = `${BASE_URL}/api/updateTodayDailyTask`
            }
            console.log(url)
            const response = await axios.post(url, {
                id: taskId,
                task: updatedTaskText
            });

            console.log(response.data)
        } catch (error) {
            console.error("Error updating task:", error);
            setError('An error occurred. Please try again.');
        }
    };

    const handleStatusChange = async (taskId, newStatus) => {
        console.log("status change")
        try {
            const response = await axios.post(`${BASE_URL}/api/updateTaskStatus`, {
                taskId: taskId,
                newStatus: newStatus
            });
            console.log(response.data);
            if (response.data.success) {
                // Update tasks state after successful update
                const updatedTasks = tasks.map(task => {
                    if (task.id === taskId) {
                        return { ...task, status: newStatus };
                    }
                    return task;
                });
                setTasks(updatedTasks);
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error("Error updating task status:", error);
            setError('An error occurred. Please try again.');
        }
    };


    const handleDailyStatusChange = async (taskId, newStatus, count) => {
        try {
            let updatedTaskText = updatedDailyTasks[taskId];

            if (updatedTaskText === undefined) {
                const originalTask = dailytasks.find(task => task.id === taskId);
                updatedTaskText = count > 0 ? originalTask.newTask : originalTask.dailytask;
            }
            console.log(updatedTaskText)
            let url = `${BASE_URL}/api/insertTodayDailyTask`;
            console.log(count, count > 0)
            if (count > 0) {
                url = `${BASE_URL}/api/updateTodayDailyTask`
            }
            console.log(url)
            const response = await axios.post(url, {
                id: taskId,
                task: updatedTaskText,
                status: newStatus
            });

            console.log(response.data)
        } catch (error) {
            console.error("Error updating task:", error);
            setError('An error occurred. Please try again.');
        }
    };

    const formatDate = () => {
        const now = new Date();
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const dayName = weekdays[now.getDay()];
        const monthName = monthNames[now.getMonth()];
        const dayNumber = String(now.getDate()).padStart(2, '0');

        return `${dayName}, ${monthName} ${dayNumber}`;
    };


    const changeFavourite = ()=>{
        if(favourite==0){
            setFavourite(1)
        }else{
            setFavourite(0)
        }

        console.log(favourite)
        
    }



    return (
        <>

            <div className='TodayInfo'>
                <div style={{ fontSize: "25px", padding: "0px 0px 5px 0px" }}>
                    My Day
                </div>
                <div style={{ padding: "0px 0px 30px 0px" }}>
                    {formatDate()}
                </div>
            </div>

            <form className='new-add' onSubmit={handleSubmit}>
                <div className="form-group required">
                    {/* <input type="text" className='form-control'/> */}
                    <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
                </div>
                <div style={{ display: "flex",padding:"10px 0px 0px 0px" }}>
                
                    <button className='btn btn-success'>Add</button>
                    <div className='favorite' onClick={changeFavourite} style={{color:"yello"}}>
                        {favourite===0?<CiStar />:<FaStar color='yellow'/>}
                    </div>
                    
                </div>
            </form>

            <div className='to-do'>
                <div className='taskGroup'>
                    <div className='Heading'>
                        Today Specific Task
                    </div>
                    {tasks.length === 0 ? (
                        <div style={{ fontSize: '20px', textAlign: 'center', marginTop: '35px' }}>Don't have any tasks</div>
                    ) : (
                        tasks.map(task => (
                            <div className='task' key={task.id} >
                                <textarea
                                    defaultValue={task.task}
                                    onChange={(e) => handleUpdateChange(task.id, e.target.value)}
                                ></textarea>
                                <div>
                                    <div>
                                        <input
                                            type='checkbox'
                                            id={`check${task.id}`}
                                            defaultChecked={task.status === 'Complete'}
                                            onChange={(e) => handleStatusChange(task.id, e.target.checked ? 'Complete' : 'Pending')}
                                        /> &nbsp;
                                        <label htmlFor={`check${task.id}`}>Done</label>
                                        {task.important==1?<FaStar color='yellow' style={{marginLeft:"5px"}}/>:<></>}
                                    </div>

                                    <button className='btn btn-success mt-1' onClick={() => handleUpdate(task.id)}>Update</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className='taskGroup'>
                    <div className='Heading'>
                        Daily Task
                    </div>
                    {
                        dailytasks.length === 0 ? (
                        <div style={{ fontSize: '20px', textAlign: 'center', marginTop: '35px' }}>Don't have any tasks</div>
                    ) : (
                        dailytasks.map(task => (

                            <div className='task' key={task.id}>
                                <textarea defaultValue={task.todays_task_count == 0 ? task.dailytask : task.newTask}
                                    onChange={(e) => handleUpdateChangeForDaily(task.id, e.target.value)}
                                >

                                </textarea>
                                <div>
                                    <div>
                                        <input
                                            type='checkbox'
                                            id={`check${task.id}`}
                                            defaultChecked={task.todays_task_count == 0 ? false : task.actual_status === 'Complete'}
                                            onChange={(e) => handleDailyStatusChange(task.id, e.target.checked ? 'Complete' : 'Pending', task.todays_task_count)}
                                        /> &nbsp;
                                        <label >Done</label>
                                    </div>
                                    <button className='btn btn-primary mt-1' onClick={() => handleUpdateDailyTask(task.id, task.todays_task_count)}>Update</button>
                                </div>
                            </div>
                        ))
                    )}


                </div>
            </div>

        </>
    );
}

export default Inbox;
