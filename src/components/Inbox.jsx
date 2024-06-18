import React from 'react';

function Inbox() {
    return (
        <>
            <div className='new-add'>
                <div class="form-group required">
                    <input type="text" name="designation_name" class="form-control" id="designation_name" placeholder="Enter Name" required="" minlength="3" maxlength="30" />
                </div>
                <button className='btn btn-primary mt-3'>Add</button>
            </div>
           
        </>
    );
}

export default Inbox;
