import React from 'react'
import Movie from "./movie/Movie";

export default function MovieList(props) {
    return (
        <div>
            {
                props.movies.map((Mov) => {
                    return (
                        <>
                            <div>
                                <Movie movie={Mov} />
                            </div>
                        </>
                    );

                })

            }
        </div>
    )
}
