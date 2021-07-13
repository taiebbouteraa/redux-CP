import { Button } from 'react-bootstrap'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, taskComplete } from '../JS/actions'



const Task = ({ task, handleModal }) => {
    const dispatch = useDispatch()
    return (
        <div className='task'>
            <div className={task.isDone ? "done col-md-4" : 'col-md-4'}>{task.description}</div>
            <div className='task-buttons col-md-3'>
                <Button className='bt' onClick={handleModal} >Edit</Button>
                <Button className='bt' variant="danger" onClick={() => dispatch(deleteTask(task.id))} >Delete</Button>
                <Button className='bt' variant={task.isDone ? 'success' : 'warning'} style={{ width: 90 }} onClick={() => dispatch(taskComplete(task.id))}> {task.isDone ? 'Redo' : 'Done'}</Button>
            </div>
        </div>
    )
}

export default Task
