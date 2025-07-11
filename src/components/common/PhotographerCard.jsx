"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PhotographerCard({ photographer }) {
  return (
        <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
    <div className="bg-gray-400 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-60 w-full">
      <Image
        src={photographer.profilePic}
        alt={photographer.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-t-xl object-cover"
      />
      </div>

      <div className="p-2">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold">{photographer.name}</h2>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
            {photographer.rating} ★
          </span>
        </div>

        <p className="text-gray-600 mt-1">{photographer.location}</p>
        <p className="font-semibold mt-2">₹{photographer.price.toLocaleString()} onwards</p>

        <div className="flex flex-wrap gap-1 my-3">
          {photographer.tags.map(tag => (
            <span
              key={tag}
              className="bg-gray-300 px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link href={`/photographer/${photographer.id}`}>
          <button className="w-full mt-4 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg transition-colors">
            View Profile
          </button>
        </Link>
      </div>
    </div>
     </motion.div>
  );
}

