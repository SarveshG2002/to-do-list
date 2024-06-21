import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { BASE_URL } from './Host.jsx';
function Inbox() {
    const [text,setText] = useState("");
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchTasks();
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

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            console.log(text)
            const username = localStorage.getItem('username');
            // if (!username) {
            //     throw new Error('Username not found in localStorage');
            // }
            const response = await axios.post(`${BASE_URL}/api/addtodayTask`,{
                username: username,
                task:text
            })
            console.log(response.data)
            if(response.data.success){
                setText("");
                fetchTasks();
                
            }
        }catch (error) {
            console.error("Error during login:", error);
            setError('An error occurred. Please try again.');
        }
    }

    return (
        <>
            <form className='new-add' onSubmit={handleSubmit}>
                <div class="form-group required">
                    {/* <input type="text" className='form-control'/> */}
                    <textarea value={text} onChange={(e)=>setText(e.target.value)}></textarea>
                </div>
                <button className='btn btn-primary mt-3'>Add</button>
            </form>

            <div className='to-do'>
                <div className='Heading'>
                    Today Task
                </div>
                {tasks.map(task => (
                    <div className='task' key={task.id}>
                        <textarea defaultValue={task.task}></textarea>
                        <div>
                            <input type='checkbox' id={`check${task.id}`} defaultChecked={task.status === 'complete'} /> &nbsp;
                            <label htmlFor={`check${task.id}`}>Done</label>
                        </div>
                    </div>
                ))}
            </div>
           
        </>
    );
}

export default Inbox;
