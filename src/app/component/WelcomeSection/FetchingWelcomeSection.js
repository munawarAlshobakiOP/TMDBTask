const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE;
export const fetchRandomImg = async (setBackgroundImage, setIsLoading) => { 
    try {
    setIsLoading(true);

    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const movies = data.results || [];
    const moviesWithBackdrops = movies.filter(movie => movie.backdrop_path);

    if (moviesWithBackdrops.length > 0) {
      const randomIndex = Math.floor(Math.random() * moviesWithBackdrops.length);
      const randomMovie = moviesWithBackdrops[randomIndex];
      const backdropUrl = `${IMAGE_BASE}/original${randomMovie.backdrop_path}`;
      setBackgroundImage(backdropUrl);
    } else {
      setBackgroundImage(`${IMAGE_BASE}/original/7WJjFviFBffEJvkAms4uWwbcVUk.jpg`);
    }
  } catch (error) {
    setBackgroundImage(`${IMAGE_BASE}/original/7WJjFviFBffEJvkAms4uWwbcVUk.jpg`);
  } finally {
    setIsLoading(false);
  }
};