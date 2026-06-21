import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import "../css/home.css"

function Home() {
     // Context
    const {movies, setMovies, searchQuery, setSearchQuery, 
        error, setError, loading, setLoading} = useContext(MovieContext);

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

    // Handle search
    async function handleSearch(query) {
        if (!query) return;
        setLoading(true);
        
        try {
            const result = await searchMovies(searchQuery);
            setMovies(result);
        } catch (err) {
            setErrors(err);
            console.error(error);
        } finally {
            setLoading(false);
            console.log("MOVIES:", movies);
        }
    }

    // If user wants to load popular movies again
    async function displayPopularMovies() {
        try {
            // Turn on loading message
            setLoading(true);
            // Get array of popular movie objects
            const popularMovies = await getPopularMovies();
            // Updating state variable containing movies to display
            setMovies(popularMovies);
        } catch(err) {
            setErrors(err);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    // Open movie details
    function showMovie(movie) {
        alert(movie.title);
        // movies.map(movie => movie.id == movieId (
        //     alert(movie)
        // ));
    }

    // COMPONENT
    return (
        <div className="home">
            <div className="search-bar-wrapper">
                <input type="text" className="search-input" 
                placeholder="Search for movies..."
                // value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
                <button className="search-btn" 
                onClick={() => handleSearch(searchQuery)}>search</button>
                <button className="popular-movies-btn" onClick={() => displayPopularMovies()}>
                    Popular movies</button>
            </div>

            {loading ? 
            (<h1>Loading...</h1>)
            :
            (<div className="movie-grid">
                {movies.map(movie => (
                movie.title.toLowerCase().includes(searchQuery) &&
                <MovieCard movie={movie} key={movie.id} onClick={() => showMovie(movie)}/>
            ))}
            {movies.length == 0 && <h1>No results to show</h1>}
            </div>)}

            
        </div>
    );
}

export default Home