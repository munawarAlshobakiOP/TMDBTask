  export function formatRuntime(minutes) {
    if (!minutes) return 'Runtime not available';
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m}m`;
  }
