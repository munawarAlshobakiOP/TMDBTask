const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY 
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
export async function fetchTrendingWeekMovies() {
    const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.status}`);
    } 
    const data = await response.json();
    return data.results || [];
}  

export async function fetchTrendingDayMovies() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.status}`);
    } 
    const data = await response.json();
    return data.results || [];
}