"use client";
import React from 'react';
import { usePhotographers } from '@/context/PhotographerContext';

const RatingFilter = () => {
  const { filters, setFilters } = usePhotographers();

  const handleChange = (e) => {
    setFilters(prev => ({ ...prev, minRating: Number(e.target.value) }));
  };

  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">Minimum Rating</label>
      <select
        value={filters.minRating}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value={0}>All Ratings</option>
        <option value={3}>3 ★ & above</option>
        <option value={4}>4 ★ & above</option>
        <option value={4.5}>4.5 ★ & above</option>
      </select>
    </div>
  );
};

export default RatingFilter;

