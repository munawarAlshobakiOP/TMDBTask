export const formatDate = dateString => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

export  function format_Date_NumericAll(dateString) {
    if (!dateString) return 'Release date not available';
    return new Date(dateString).toLocaleDateString('en-GB', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
  }
