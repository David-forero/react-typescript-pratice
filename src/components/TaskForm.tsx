import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Tasks } from '../interfaces/ITask';

interface IProps{
  addNewTask: (task: Tasks) => void;
}
type HandleChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const TaskForm = ({addNewTask}: IProps) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = ({
    target: { name, value },
  }: HandleChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    addNewTask(task);
    setTask({title: "", description: "",})
   }

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Tasks</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleChange}
          value={task.title}
        />

        <textarea
          name="description"
          rows={2}
          placeholder="Write a description"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleChange}
          value={task.description}
        ></textarea>

        <button className="btn btn-primary">
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
