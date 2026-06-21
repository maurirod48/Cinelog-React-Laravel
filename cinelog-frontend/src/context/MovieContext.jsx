
import { createContext, useContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = function({children}) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <MovieContext.Provider value={{movies, setMovies, error, setError, loading, setLoading, searchQuery, setSearchQuery}}>
            {children}
        </MovieContext.Provider>
    );
}

