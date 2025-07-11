"use client";
import { useRouter } from 'next/router';
import { usePhotographers } from '@/context/PhotographerContext';
import PhotographerCard from '@/components/common/PhotographerCard';
import FilterSidebar from '@/components/common/FilterSidebar';
import Header from '@/components/common/Header';

export default function CityCategoryPage() {
  const { query } = useRouter();
  const { city } = query;

  const { filteredPhotographers, loading } = usePhotographers();

  // Optional: filter by URL param city on top of other filters
  const visiblePhotographers = filteredPhotographers.filter((p) =>
    city ? p.location.toLowerCase() === city.toLowerCase() : true
  );

  return (
    <div className="relative">
      
      {/* Slide-in Filter Sidebar */}
      <FilterSidebar />

      {/* Page Header */}
      <div className="container mx-auto">
        <Header />

        <h2 className="text-2xl font-bold mb-6 text-gray-400">
          {city ? `Photographers in ${city}` : "All Photographers"}
        </h2>

        {/* Main Content Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading ? (
            <p>Loading...</p>
          ) : visiblePhotographers.length ? (
            visiblePhotographers.map((p) => (
              <PhotographerCard key={p.id} photographer={p} />
            ))
          ) : (
            <p className="text-gray-600">No photographers found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
