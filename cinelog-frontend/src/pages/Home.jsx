import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import "../css/home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    async function handleSearch(query) {
        const search = await searchMovies(searchQuery);
        console.log(search);
        console.log("Search query:", searchQuery);
    }

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

    // COMPONENT
    return (
        <div className="home">

            <div className="search-bar-wrapper">
                <input type="text" className="search-input" 
                placeholder="Search for movies..."
                // value={searchQuery}
                onChange={(e) => {setSearchQuery(e.target.value)}}/>
                <button className="search-btn" onClick={handleSearch}>
                    search
                </button>
            </div>

                {loading ? 
                (<h1>Loading...</h1>)
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