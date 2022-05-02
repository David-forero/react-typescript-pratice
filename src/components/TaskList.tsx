import React from 'react'
import { Tasks } from '../interfaces/ITask'
import TaskCard from './TaskCard'

interface IProps {
   tasks: Tasks[];
   deleteATask: (id: number) => void;
}

const TaskList = ({tasks, deleteATask}:IProps) => {
  return (
    <>
    {
      tasks.map(tasks => (
        <div className="col-md-4 p-2" key={tasks.id} >
          <TaskCard task={tasks} deleteATask={deleteATask} />
        </div>
      ))
    }
    </>
  )
}

export default TaskList