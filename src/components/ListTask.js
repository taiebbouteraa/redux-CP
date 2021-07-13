import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { editTask, filterAll, filterDone, filterNotDone } from '../JS/actions'
import Task from './Task'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');



const ListTask = () => {
    const { myTasks } = useSelector((state) => state)
    const dispatch = useDispatch()

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const [newDescription, setNewDescription] = useState('')
    const handleEdit = (e) => setNewDescription(e.target.value)



    return (
        <>
            <div>
                <div className='filter-btns'>
                    {/* <Button className='filter-btn' onClick={() => dispatch(filterAll())} >Reset</Button> */}
                    <Button className='filter-btn' onClick={() => dispatch(filterDone())}>Completed</Button>
                    <Button className='filter-btn' onClick={() => dispatch(filterNotDone())} >Incomplete</Button>
                </div>
                {myTasks.map((el) => (<Task task={el} key={el.id} handleModal={openModal} />))}
            </div>

            {/* modal */}
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <Form.Label id='modal-lable'>Edit your To do</Form.Label>
                    <Form>
                        <Form.Control type="text" value={newDescription} onChange={handleEdit} />
                        <div id='modal-btns'>
                            <Button variant="info" onClick={closeModal}>Edit</Button>
                            <Button variant="danger" onClick={closeModal}>close</Button>
                        </div>
                    </Form>
                </Modal>
            </div>
        </>
    )
}

export default ListTask
