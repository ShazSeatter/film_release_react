import React from "react";
import Film from '../components/Films';


function FilmReleaseList({films}) {
    const filmNodes = films.map(film => (
        <Film key={film.id} url={film.url} name={film.name}/>
    ))

    return (
        <>
        <h1>Film Release List</h1>
        {filmNodes}
        </>
    )
}

export default FilmReleaseList; 