import React, { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@material-ui/core/TextField';


function AddTodo() {
    const [task, setTask] = useState('')
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(task)
        console.log(date)
    }
    return (
        <form onSubmit={handleSubmit} class="col d-flex justify-content-center">
            <div class="form-outline mb-4" >
                <div>
                    <label >Enter your Task:<br></br>
                        <input
                            class="form-control"
                            type="text"
                            name='task'
                            id='task'
                            placeholder='Enter your Task'
                            required="This is required Field"
                            minLength={5}
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        /><br></br>
                    </label><br></br>
                </div>

                <div className="form-control">
                    <label> Add your date
                        Date</label>
                    <TextField style={{
                        margin: 'auto',
                        display: 'block',
                        width: 'fit-content'
                    }}
                        type="date"
                        value={date}
                        placeholder="Add Date"
                        defaultValue=""
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div><br></br>
                <button type="submit" class="btn btn-primary btn-block mb-2">Add Task</button>
            </div>
        </form>

    )
}

export default AddTodo