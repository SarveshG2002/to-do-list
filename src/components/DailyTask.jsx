import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASE_URL } from './Host.jsx';

function Upcoming() {
    const [text, setText] = useState("");
    // const [updateText, setUpdateText] = useState("");
    // const [updateId, setUpdateId] = useState("");
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState("");
    const [updatedTasks, setUpdatedTasks] = useState({});

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const username = localStorage.getItem('username');
            const response = await axios.post(`${BASE_URL}/api/getdailytasks`, {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(text)
            const username = localStorage.getItem('username');
            // if (!username) {
            //     throw new Error('Username not found in localStorage');
            // }
            const response = await axios.post(`${BASE_URL}/api/adddailytask`, {
                username: username,
                task: text
            })
            console.log(response.data)
            if (response.data.success) {
                setText("");
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

    const handleUpdate = async (taskId) => {
        try {
            const updatedTaskText = updatedTasks[taskId];
            const response = await axios.post(`${BASE_URL}/api/updateDailytask`, {
                task_id: taskId,
                username: localStorage.getItem("username"),
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

    const formatDate = () => {
        const now = new Date();
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const dayName = weekdays[now.getDay()];
        const monthName = monthNames[now.getMonth()];
        const dayNumber = String(now.getDate()).padStart(2, '0');

        return `${dayName}, ${monthName} ${dayNumber}`;
    };

    return (
        <>

<div className='TodayInfo'>
                <div style={{ fontSize: "25px", padding: "0px 0px 5px 0px" }}>
                    Daily Tasks
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
                <button className='btn btn-primary mt-3'>Add</button>
            </form>

            <div className='to-do'>
                <div className='taskGroup'>
                    
                    {tasks.map(task => (
                        <div className='task' key={task.id}>
                            <textarea defaultValue={task.dailytask} onChange={(e) => handleUpdateChange(task.id, e.target.value)}></textarea>
                            <div>
                                <button className='btn btn-primary mt-1' onClick={(e) => handleUpdate(task.id)}>Update</button>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>

        </>
    );
}

export default Upcoming;
