import { useState } from "react";

export default function TaskCreator( {createTask}) {
  const [newtaskName, setNewtaskName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    createTask(newtaskName)
    setNewtaskName("");
  }

  return (
    <div >
      <form className="my-2 row" onSubmit={handleSubmit}>
        <div className="col-9">
          <input
          className="form-control"
            onChange={(e) => setNewtaskName(e.target.value)}
            type="text"
            placeholder="Input a new task"
            value={newtaskName}
          />
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-sm">Save Task</button>
        </div>
      </form>
    </div>
  );
}