import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

function Home() {
    const [movies, setMovies] = useState([]);
    const [error, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPopularMovies() {
            const attempt = await getPopularMovies();
            setMovies(attempt);
            console.log(attempt[0]);
        }

        loadPopularMovies();
    }, []);

    return (
        <div className="home">
            <h1>Hello React!</h1>

            <div className="movie-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
            
            
        </div>
    );
}

export default Home