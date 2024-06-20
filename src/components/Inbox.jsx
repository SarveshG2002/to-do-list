import axios from 'axios';
import React, { useState,useEffect } from 'react';

function Inbox() {
    const [text,setText] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            console.log(text)
            const username = localStorage.getItem('username');
            // if (!username) {
            //     throw new Error('Username not found in localStorage');
            // }
            const response = await axios.post("http://192.168.0.104:8080/api/addtodayTask",{
                username: username,
                task:text
            })
            console.log(response.data)
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
                    <textarea onChange={(e)=>setText(e.target.value)}></textarea>
                </div>
                <button className='btn btn-primary mt-3'>Add</button>
            </form>

            <div className='to-do'>
                <div className='Heading'>
                    Today Task
                </div>
                <div className='task'>
                    <textarea></textarea>
                    <div>
                        <input type='checkbox' id="check1"/> &nbsp;
                        <label for="check1">Done</label>
                    </div>
                </div>
            </div>
           
        </>
    );
}

export default Inbox;
