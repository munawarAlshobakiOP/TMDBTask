const API_KEY = 'e2161fa6a40f29be185672567ac4df00';

export async function FetchingDetails(mediaType, mediaId) {
  if (!mediaType || !mediaId || isNaN(mediaId)) {
    throw new Error("Invalid media type or ID");
  }

  const url = `https://api.themoviedb.org/3/${mediaType}/${mediaId}?api_key=${API_KEY}&language=en-US`;

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

export async function FetchingCast(mediaType, mediaId) {
  if (!mediaType || !mediaId || isNaN(mediaId)) {
    throw new Error("Invalid cast type or ID");
  }

  const url = `https://api.themoviedb.org/3/${mediaType}/${mediaId}/credits?api_key=${API_KEY}&language=en-US`;

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
        ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
        : "https://via.placeholder.com/185x278?text=No+Image"
    }));
  } catch (error) {
    console.error("FetchingCast error:", error);
    throw new Error(`Cast fetch failed: ${error.message}`);
  }
}
