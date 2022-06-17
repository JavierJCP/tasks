export default function VisibilityControl({setShowCompleted, cleanTasks, ischecked}) {

  function handleDelete() {
   
      if(window.confirm('Are you sure you want to deleted?')){
        cleanTasks()
      }  
  }
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          checked={ischecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
          type="checkbox"
        />{" "}
        <label>Shows Tasks Done</label>
      </div>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Clear
      </button>
    </div>
  );
}
