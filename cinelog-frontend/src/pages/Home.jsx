import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import "../css/home.css"

function Home() {
    const [movies, setMovies] = useState([]);
    const [error, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPopularMovies() {
            try {
                const attempt = await getPopularMovies();
                setMovies(attempt);
                console.log(attempt[0]);
            } catch(err) {
                setErrors(err);
                console.error(error);
            } finally {
                setLoading(false);
            }
            
            
        }

        loadPopularMovies();
    }, []);

    return (
        <div className="home">

                {loading ? 
                (<h1 >Loading...</h1>)
                :
                (<div className="movie-grid">
                    {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                
                ))}
                </div>)}
            
        </div>
    );
}

export default Home