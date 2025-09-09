const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
const BEARER_TOKEN = process.env.NEXT_PUBLIC_TMDB_BEARER;
const api_key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
export async function fetchLanguages() {
  try {
    const res = await fetch(`${API_BASE}/configuration/languages?api_key=${api_key}`, {
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
export async function fetchGenres(language = 'en') {
  try {
    const url = `${API_BASE}/genre/movie/list?language=${language}&api_key=${api_key}`;
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