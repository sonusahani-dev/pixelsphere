import { useState } from 'react';

const useFilters = () => {
  const [filters, setFilters] = useState({
    search: '',
    maxPrice: 50000,
    minRating: 0,
    city: '',
    styles: [],
    tags: [],
  });

  const resetFilters = () => {
    setFilters({
      search: '',
      maxPrice: 50000,
      minRating: 0,
      city: '',
      styles: [],
      tags: [],
    });
  };

  return {
    filters,
    setFilters,
    resetFilters,
  };
};

export default useFilters;
