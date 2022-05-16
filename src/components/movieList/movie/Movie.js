import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ModalMovie from '../../modalMovie/ModalMovie'


export default function Movie(props) {

    const [show, setShow] = useState(false);
    const [chosenMovie, setChosenMovie] = useState({});
    const handleClose = () => setShow(false);

    const handleShow = () => {

        setChosenMovie(props.movie);
        setShow(true);
    }


    return (
        <div>
            <Card style={{ width: '18rem', margin: '5px', backgroundColor: '#7F8487' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
                <Card.Body style={{ height: '400px' }}>
                    <Card.Title>{props.movie.title || ' null '}</Card.Title>
                    <Card.Text style={{ overflowX: 'hidden', scrollBehavior: 'smooth', height: '200px' }}>
                        {props.movie.overview}
                    </Card.Text>
                    <Card.Text>
                        {props.movie.release_date || 'There is no release date'}
                    </Card.Text>
                    <Button variant="danger" onClick={handleShow}>Add To Favorite</Button>
                </Card.Body>
            </Card>

            {
                chosenMovie && <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie} updateMovie = {props.updateMovie}/>
            }
 


        </div>
    )
}
