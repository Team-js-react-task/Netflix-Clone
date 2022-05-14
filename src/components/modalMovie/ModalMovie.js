import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function ModalMovie(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton style={{ backgroundColor: '#7F8487' }}>
                    <Modal.Title>{props.chosenMovie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#7F8487' }}>
                    <img src={`https://image.tmdb.org/t/p/w400/${props.chosenMovie.poster_path}`} alt="Movie poster" />
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Add Comment</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#7F8487' }}>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={props.handleClose}>
                        Add To Favorite
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
