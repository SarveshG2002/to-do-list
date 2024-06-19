import React from 'react';

function Inbox() {
    return (
        <>
            <div className='new-add'>
                <div class="form-group required">
                    {/* <input type="text" className='form-control'/> */}
                    <textarea></textarea>
                </div>
                <button className='btn btn-primary mt-3'>Add</button>
            </div>

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
