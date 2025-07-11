"use client";
import { useState, useEffect } from 'react';
import ProfileHeader from './ProfileHeader';
import Gallery from './Gallery';
import Reviews from './Reviews';
import InquiryModal from './InquiryModal';

const PhotographerProfile = ({ id }) => {
  const [photographer, setPhotographer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  useEffect(() => {
    const fetchPhotographer = async () => {
      try {
        setLoading(true);
        // Replace with your actual fetch function
        const response = await fetch(`/api/photographers/${id}`);
        const data = await response.json();
        setPhotographer(data);
      } catch (error) {
        console.error("Error fetching photographer:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPhotographer();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!photographer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Photographer not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <ProfileHeader photographer={photographer} />
      
      {/* Styles & Tags */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-3">Photography Styles</h2>
          <div className="flex flex-wrap gap-2">
            {photographer.styles.map((style, index) => (
              <span 
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
              >
                {style}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-3">Specialized Tags</h2>
          <div className="flex flex-wrap gap-2">
            {photographer.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <Gallery portfolio={photographer.portfolio} />
      <Reviews reviews={photographer.reviews} />
      
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setShowInquiryModal(true)}
          className="px-8 py-3 dark:bg-gray-600 text-gray-400 rounded-lg hover:bg-gray-700 transition-colors font-medium text-lg"
        >
          Send Inquiry
        </button>
      </div>
      
      {showInquiryModal && (
        <InquiryModal 
          photographer={photographer} 
          onClose={() => setShowInquiryModal(false)} 
        />
      )}
    </div>
  );
};

export default PhotographerProfile;