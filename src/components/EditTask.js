import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editTask } from '../JS/actions';

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

const EditTask = ({ task }) => {
    const dispatch = useDispatch()

    const [oldAction, setOldAction] = useState(task.description);
    const edit = (newText) => {
        const editedTask = {
            id: task.id,
            action: newText,
            isDone: task.isDone,
        };
        dispatch(editTask(editedTask));
        closeModal();
    }
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Button className='bt' onClick={() => openModal()} >Edit</Button>
            <Modal

                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <Form.Label id='modal-lable'>Edit your To do</Form.Label>
                <Form onSubmit={handleSubmit}>
                    <Form.Control type="text" value={oldAction} onChange={(e) => setOldAction(e.target.value)} />
                    <div id='modal-btns'>
                        <Button variant="info" onClick={closeModal} onClick={() => edit(oldAction)}>Edit</Button>
                        <Button variant="danger" onClick={closeModal}>close</Button>
                    </div>
                </Form>
            </Modal>
        </>
    )
}

export default EditTask
