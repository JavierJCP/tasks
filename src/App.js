import { useState, useEffect } from "react";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/Tasktable";
import "./App.css";
import VisibilityControl from "./components/VisibilityControl";
import { Container } from "./components/Container"

function App() {

  const [tasks, setTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false)

  function createTask(taskName) {
    if (!tasks.find((task) => task.name === taskName)) {
      setTasks([...tasks, { name: taskName, done: false }]);
    }
  }

  function toggleTask(task) {
    setTasks(
      tasks.map((t) => (t.name === task.name) ? ({ ...t, done: !t.done }) : t)
    );
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  function cleanTasks() {
    setTasks(tasks.filter((tasks) => !tasks.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main className="bg-dark vh-100 text-white">
    <Container>
      <TaskCreator createTask={createTask} />

      <TaskTable tasks={tasks}  toggleTask={toggleTask}/>

      <VisibilityControl
        ischecked = {showCompleted}
        setShowCompleted={(checket) => setShowCompleted(checket)}
        cleanTasks={cleanTasks}
      />  

      {
        showCompleted === true && (
          <TaskTable tasks={tasks}  toggleTask={toggleTask} showCompleted={showCompleted}/>
        )
      }
    </Container>
    </main>
  );
}

export default App;
