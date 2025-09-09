const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const baseurl = process.env.NEXT_PUBLIC_API_BASE;
  const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE;
const DEFAULT_IMAGE = process.env.NEXT_PUBLIC_DEFAULT_IMAGE;
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
