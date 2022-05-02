import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Tasks } from "./interfaces/ITask";
import logo from "./logo.svg";
// import { v4 as uuidv4  } from 'uuid'

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([
    {
      id: 1,
      title: "Learn react",
      description: "I have to learn react",
      completed: false,
    },
  ]);

  const getCurrentTimestamp = (): number => new Date().getTime();

  const addNewTask = (task: Tasks) => setTasks([...tasks, {...task, id: getCurrentTimestamp(), completed: false}]);

  const deleteATask = (id: number): void =>
    setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <div className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="text-white">
            <img src={logo} alt="react logo" style={{ width: "4rem" }} />
            React app task with TypeScript
          </a>
        </div>
      </div>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={addNewTask} />
          </div>

          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteATask={deleteATask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
