import "../css/MovieCard.css"

function MovieCard({movie}) {
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="image"
            className="movie-img"/>
            <h3>{movie.title}</h3>
        </div>
    );
}

export default MovieCard