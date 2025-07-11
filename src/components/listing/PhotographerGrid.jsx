"use client";
import SkeletonCard from '@/components/common/SkeletonCard';
import PhotographerCard from '@/components/common/PhotographerCard';
import Image from 'next/image'; 
export default function PhotographerGrid({ photographers, loading }) {
  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (!photographers?.length) {
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
      {photographers.map(p => (
        <PhotographerCard key={p.id} photographer={p} />
      ))}
     <div className="relative w-full h-64 col-span-full">
        <Image
          src="/images/a.jpg"
          alt="Photographer silhouette during sunset"
          fill
          priority
          loading="eager" 
          className="object-cover w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}
