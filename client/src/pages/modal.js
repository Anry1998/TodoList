import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

function Example(props) {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const [text, setText] = useState(props.item.content)

  const handleClose = () => {
    
    setShow(false);
    setText(props.item.content)
  }

  const updateTodo = (id) => {
    axios.put
    (`http://localhost:5002/api/posts/${id}`, {
        newContent: text
    })

    setShow(false);   
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Редактировать
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Введите текст" value={text} onChange={(e) => setText(e.target.value)}/>
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отмена
          </Button>
          <Button variant="primary" onClick={() => updateTodo(props.item.id)}>Внести изменения</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;