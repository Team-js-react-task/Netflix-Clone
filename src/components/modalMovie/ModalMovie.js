import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useRef } from 'react'

export default function ModalMovie(props) {
    let commentRef = useRef();

    function handleComment(e) {
        e.preventDefault();
        let userComment = commentRef.current.value;
        console.log({ userComment });
        let newMovie = {...props.chosenMovie, userComment};
        props.updateMovie(newMovie,props.chosenMovie.id);
    }
    async function handleAdd(e, movie) {
        e.preventDefault();
        console.log('movie', movie);
        let url = "https://movies-haimour.herokuapp.com/addMovie";
        let data = {
            image : movie.image,
            title : movie.title,
            release_date : movie.release_date,
            overview : movie.overview,
            comment : movie.comment
        }
        console.log('data', data);
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let addedMovie = await response.json();
        console.log('addedMovie', addedMovie);
    }
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton style={{ backgroundColor: '#7F8487' }}>
                    <Modal.Title>{props.chosenMovie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#7F8487' }}>
                    <img src={`https://image.tmdb.org/t/p/w400/${props.chosenMovie.poster_path}`} alt="Movie poster" />
                    <br/>
                    {props.chosenMovie.comment ? props.chosenMovie.comment : "No comment is added"}
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Add Comment</Form.Label>
                            <Form.Control ref = {commentRef} placeholder='add your comment' as="textarea" rows={3} />
                            <Button variant="danger" type='submit' onClick={(e) => handleComment(e)} >Submit Comment</Button>
                            <Button variant="danger" type='submit' onClick={(e) => handleAdd(e, props.chosenMovie)} >Add To Favorite</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#7F8487' }}>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
