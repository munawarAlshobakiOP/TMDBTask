const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const baseurl = process.env.NEXT_PUBLIC_API_BASE;
  const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE;
const DEFAULT_IMAGE = process.env.NEXT_PUBLIC_DEFAULT_IMAGE;


{/**********************/}
export async function FetchingDetails(mediaType, mediaId) {
  if (!mediaType || !mediaId || isNaN(mediaId)) {
    throw new Error("Invalid media type or ID");
  }

  const url = `${baseurl}/${mediaType}/${mediaId}?api_key=${API_KEY}&language=en-US`;

  const options = {
    headers: {
      accept: "application/json",
    },
    cache: "no-store"
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      if (res.status === 401) {
        throw new Error("API authentication failed. Please check your API key.");
      }
      const errorData = await res.json().catch(() => ({}));
      throw new Error(`Media fetch failed: ${res.status} - ${errorData.status_message || 'Unknown error'}`);
    }
    return await res.json();
  } catch (error) {
    console.error("FetchingDetails error:", error);
    throw new Error(`Media fetch failed: ${error.message}`);
  }
}
{/**********************/}
export async function FetchingCast(mediaType, mediaId) {
  if (!mediaType || !mediaId || isNaN(mediaId)) {
    throw new Error("Invalid cast type or ID");
  }

  const url = `${baseurl}/${mediaType}/${mediaId}/credits?api_key=${API_KEY}&language=en-US`;

  const options = {
    headers: {
      accept: "application/json",
    },
    cache: "no-store"
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      if (res.status === 401) {
        throw new Error("API authentication failed. Please check your API key.");
      }
      const errorData = await res.json().catch(() => ({}));
      throw new Error(`Cast fetch failed: ${res.status} - ${errorData.status_message || 'Unknown error'}`);
    }

    const data = await res.json();
    return data.cast.map((person) => ({
      name: person.name,
      character: person.character,
      image: person.profile_path
        ? `${IMAGE_BASE}/w185${person.profile_path}`
        : `${DEFAULT_IMAGE}`,
    }));
  } catch (error) {
    console.error("FetchingCast error:", error);
    throw new Error(`Cast fetch failed: ${error.message}`);
  }
}
{/**********************/}
export async function fetchLanguages() {
  try {
    const res = await fetch(`${baseurl}/configuration/languages?api_key=${API_KEY}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch languages: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching languages:', error);
    return [];
  }
}
{/**********************/}

export async function fetchGenres(language = 'en') {
  try {
    const url = `${baseurl}/genre/movie/list?language=${language}&api_key=${API_KEY}`;
    const headers = {
      accept: 'application/json',
    };
 

    const res = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch genres: ${res.status}`);
    }

    const data = await res.json();
    return data.genres || [];
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
}
{/**********************/}

export async function fetchTrendingWeekMovies() {
    const url = `${baseurl}/trending/movie/week?api_key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.status}`);
    } 
    const data = await response.json();
    return data.results || [];
}  
{/**********************/}

export async function fetchTrendingDayMovies() {
    const url = `${baseurl}/trending/movie/day?api_key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.status}`);
    } 
    const data = await response.json();
    return data.results || [];
}
{/**********************/
}
export const fetchRandomImg = async (setBackgroundImage, setIsLoading) => { 
    try {
    setIsLoading(true);

    const url = `${baseurl}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

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
{/**********************/}

export async function fetchSearchResults(query, page = 1) {
  if (!query || query.trim() === '') {
    throw new Error("Search query cannot be empty");
  }

  const url = `${baseurl}/search/multi?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=${page}&include_adult=false`;

  const options = {
    headers: {
      accept: "application/json",
    },
    cache: "no-store"
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      if (res.status === 401) {
        throw new Error("API authentication failed. Please check your API key.");
      }
      const errorData = await res.json().catch(() => ({}));
      throw new Error(`Search failed: ${res.status} - ${errorData.status_message || 'Unknown error'}`);
    }
    
    const data = await res.json();
    return {
      results: data.results || [],
      totalPages: data.total_pages || 0,
      totalResults: data.total_results || 0,
      page: data.page || 1
    };
  } catch (error) {
    console.error("fetchSearchResults error:", error);
    throw new Error(`Search failed: ${error.message}`);
  }
}