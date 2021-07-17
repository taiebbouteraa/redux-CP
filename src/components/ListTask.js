import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Task from './Task'
import Modal from 'react-modal';



const ListTask = () => {
    const { myTasks } = useSelector((state) => state)
    //-------------------------filter start---------------------
    const [done, setDone] = useState(false)

    let list = 0
    done ? list = list = myTasks.map((el) => (<Task task={el} key={el.id} />)).filter((x) => x.props.task.isDone === true) : list = myTasks.map((el) => (<Task task={el} key={el.id} />))
    //-------------------------filter end-----------------------
    return (
        <>
            <div>
                <div className='filter-btns'>
                    <Button className='filter-btn' variant="secondary" onClick={() => setDone(!done)}>{done ? 'Show all' : 'Completed'}</Button>
                </div>
                {list}
            </div>
        </>
    )
}

export default ListTask
