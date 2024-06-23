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

    return (
        <>
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
                                <div>
                                    <input 
                                        type='checkbox' 
                                        id={`check${task.id}`} 
                                        defaultChecked={task.status === 'complete'} 
                                        onChange={(e) => handleStatusChange(task.id, e.target.checked ? 'complete' : 'incomplete')}
                                        /> &nbsp;
                                    <label htmlFor={`check${task.id}`}>Done</label>
                                </div>
                                
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
