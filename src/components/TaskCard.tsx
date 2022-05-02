import React from "react";
import { Tasks } from "../interfaces/ITask";

interface IProps {
  task: Tasks;
  deleteATask: (id: number) => void;
}

const TaskCard = ({ task, deleteATask }: IProps) => {
  return (
    <div className="card card-body bg-secondary rounded-0 text-dark">
      <h2>{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>

      <button onClick={() => task.id && deleteATask(task.id)} className="btn btn-danger">Delete</button>
    </div>
  );
};

export default TaskCard;
