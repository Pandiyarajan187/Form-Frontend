import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@material-ui/core/TextField";

function AddTodo() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    console.log(date);
  };
  return (
    <form onSubmit={handleSubmit} class="col d-flex justify-content-center">
      <div class="form-outline mb-4">
        <div>
          <label>
            Add your Task:<br></br>
            <TextField
              variant="filled"
              type="text"
              name="task"
              id="task"
              placeholder="Enter your Task"
              required="This is required Field"
              minLength={5}
              value={task}
              error={task}
              helperText={task.length && task.length < 5 ? "Please Enter max 5 Character" : ""} 
              onChange={(e) => setTask(e.target.value)}
            />
            <br></br>
          </label>
         
        </div> <br></br>

        <div>
          <label> Add your Date</label><br></br>
          <TextField
            variant="filled"
            style={{
              margin: "auto",
              display: "block",
              width: "fit-content",
            }}
            type="date"
            value={date}
            placeholder="Add Date"
            required
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setDate(e.target.value)}
          /><br></br>
        </div>
        <br></br>
        <button type="submit" class="btn btn-primary btn-block mb-2">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
