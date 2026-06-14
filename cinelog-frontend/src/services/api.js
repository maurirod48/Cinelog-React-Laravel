const OMDB_API_KEY="a3f20749ef0e746a3b2e100fdbdb103e";
const BASE_URL="https://api.themoviedb.org/3";

export async function getPopularMovies() {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${OMDB_API_KEY}`);

    const data = await res.json();

    return data.results;
}


export async function searchMovies(query) {
    return `From API: ${query}`;
}
