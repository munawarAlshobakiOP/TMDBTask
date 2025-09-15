import { useEffect } from 'react';

const useClickOutside = (ref, callback, enabled = true) => {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, enabled]);
};

export default useClickOutside;
