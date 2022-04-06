import React, { useState, useEffect } from 'react';
import URLAXIOS from "../urlaxios";
import "../styles/Row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // A snippet of code which runs based on a specific condition

    useEffect(() => {
        console.log(fetchUrl);


        //if [], run once when the row loads, and dont run again only page load
        async function fetchData() {

            const request = await URLAXIOS.get(fetchUrl);
            console.log("---------------------------------------");
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
    console.log("*******************************");
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {

            movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    urlParams.get('v');
                })
                .catch(error => console.log(error))
        }
    }
    console.log(trailerUrl);

    return (
        <div className='row'>
            {/* title */}
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => (

                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}>

                    </img>

                ))}
                console.log(movie);

            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}

            {/* container --> posters */}
        </div>
    )
}

export default Row