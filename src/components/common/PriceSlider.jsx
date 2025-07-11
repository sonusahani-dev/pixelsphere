"use client";

import { usePhotographers } from '@/context/PhotographerContext';
import { useEffect, useState } from 'react';
const PriceSlider = () => {
  const { filters, setFilters } = usePhotographers();

  const handleChange = (e) => {
    setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }));
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Max Price (₹)</label>
      <input
        type="range"
        min={5000}
        max={50000}
        step={100}
        value={filters.maxPrice}
        onChange={handleChange}
        className="w-full"
      />
      <div className="text-sm text-gray-600 mt-1">
        Up to ₹{filters.maxPrice.toLocaleString()}
      </div>
    </div>
  );
};

export default PriceSlider;
