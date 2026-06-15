import "../css/MovieCard.css"

function MovieCard({movie}) {

    // Open movie details
    function showMovie(movie) {
        alert(movie.title);
        // movies.map(movie => movie.id == movieId (
        //     alert(movie)
        // ));
    }

    return (
        <div className="movie-card" onClick={() => showMovie(movie)}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="image"
            className="movie-img"/>
            <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split('-')[0]}</p>
            </div>
            
        </div>
    );
}

export default MovieCard