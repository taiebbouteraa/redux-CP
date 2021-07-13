import React, { useState } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../JS/actions'

const Addtask = () => {
    const [newTodo, setNewTodo] = useState('')
    const handleChange = (e) => setNewTodo(e.target.value)
    const dispatch = useDispatch()
    const handleAdd = (e) => {
        e.preventDefault()
        newTodo ? dispatch(addTask({
            id: Math.random(),
            description: newTodo,
            isDone: false,
        }), setNewTodo('')) : console.log(1)
    }

    return (
        <div className='add-bar'>
            <InputGroup className="mb-3" >
                <FormControl
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={newTodo}
                    onChange={handleChange}
                />
                <Button variant="outline-secondary" type='submit' onClick={handleAdd}>
                    Add To Do
                </Button>
            </InputGroup>
        </div>
    )
}

export default Addtask
