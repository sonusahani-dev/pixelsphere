"use client";

import { usePhotographers } from '@/context/PhotographerContext';
import { useDebounce } from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';

export default function SearchBar() {
  const { filters, setFilters } = usePhotographers();
  const [searchText, setSearchText] = useState(filters.search || '');
  const debounced = useDebounce(searchText, 500);

  useEffect(() => {
    setFilters(prev => ({ ...prev, search: debounced }));
  }, [debounced]);

  return (
    <input
      type="text"
      placeholder="Search by name, location or tag..."
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
}
