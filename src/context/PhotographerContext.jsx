import { createContext, useState, useContext, useEffect } from 'react';
import { fetchPhotographers } from '../services/api';

const PhotographerContext = createContext();

export const usePhotographers = () => useContext(PhotographerContext);

export const PhotographerProvider = ({ children }) => {
  const [photographers, setPhotographers] = useState([]);
  const [filteredPhotographers, setFilteredPhotographers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    search: '',
    maxPrice: 50000,
    minRating: 0,
    city: '',
    styles: [],
    tags: [],
  });

  const [sort, setSort] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPhotographers();
      setPhotographers(data);
      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!photographers.length) return;

    const filtered = photographers
      .filter(p => !filters.city || p.location.toLowerCase().includes(filters.city.toLowerCase()))
      .filter(p => p.rating >= filters.minRating)
      .filter(p => p.price <= filters.maxPrice)
      .filter(p => filters.styles.length === 0 || filters.styles.some(style => (p.styles || []).includes(style)))
      .filter(p => filters.tags.length === 0 || filters.tags.some(tag => (p.tags || []).includes(tag)))

      .filter(p => p.name.toLowerCase().includes(filters.search.toLowerCase()));

    const sorted = filtered.sort((a, b) => {
      if (sort === 'price-low-high') return a.price - b.price;
      if (sort === 'price-high-low') return b.price - a.price;
      if (sort === 'rating-high-low') return b.rating - a.rating;
      return 0;
    });

    setFilteredPhotographers(sorted);
  }, [filters, sort, photographers]);
  

  return (
    <PhotographerContext.Provider
      value={{
        photographers,
        filteredPhotographers,
        loading,
        filters,
        setFilters,
        sort,
        setSort,
      }}
    >
      {children}
    </PhotographerContext.Provider>
  );
};
