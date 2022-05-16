import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function FavList() {
    const [favMovies, setFavMovies] = useState();

    async function getFavMovies() {
        let url = "https://movies-haimour.herokuapp.com/getMovies";
        let response = await fetch(url, {
            method: 'GET'
        });

        let recievedData = await response.json();
        setFavMovies(recievedData);
    }

    async function handleDelete(id) {
        let url = `https://movies-haimour.herokuapp.com/DELETE/${id}`
        let response = await fetch(url, {
            method: 'DELETE',
        })
        // let deleteMovie = await response.json();

        if (response.status == 204) {
            getFavMovies();
            alert("Recipe deleted successfilly");
        }
    }

    useEffect(() => {
        getFavMovies();
    }, []);
    return (
        <>
            <h1>welcome to page</h1>
            {
            favMovies && favMovies.map((favMovie) => {
                return (
                    <Card style={{ width: '18rem', margin: '5px', backgroundColor: '#7F8487' }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${favMovie.poster_path}`} />
                        <Card.Body style={{ height: '400px' }}>
                            <Card.Title>{favMovie.title || ' null '}</Card.Title>
                            <Card.Text style={{ overflowX: 'hidden', scrollBehavior: 'smooth', height: '200px' }}>
                                {favMovie.overview}
                            </Card.Text>
                            <Card.Text>
                                {favMovie.release_date || 'There is no release date'}
                            </Card.Text>
                            <Button variant="danger" onClick={() => handleDelete(favMovie.id)}>Delete</Button>
                        </Card.Body>
                    </Card>
                )
            })
            }
        </>
    )
}


