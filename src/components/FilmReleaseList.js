import React from "react";
import Film from '../components/Films';
import UpcomingFilmRelease from '../components/UpcomingFilmRelease';


function FilmReleaseList({films}) {
    const filmNodes = films.map(film => (
        <Film key={film.id} url={film.url} name={film.name}/>
    ))

    return (
        <>
        <h1>FilmReleaseList</h1>
        {filmNodes}
        <hr/>
        <UpcomingFilmRelease></UpcomingFilmRelease>
        </>
    )
}

export default FilmReleaseList; 