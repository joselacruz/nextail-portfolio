import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const mediaQuery = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaQuery.matches);

  useEffect(() => {
    const handleChange = () => {
      setMatches(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    setMatches(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query, mediaQuery]);

  return matches;
};

export default useMediaQuery;
