"use client";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import PhotographerProfile from '@/components/profile/PhotographerProfile'; 
import ProfileHeader from '@/components/profile/ProfileHeader';
import Gallery from '@/components/profile/Gallery';
import Reviews from '@/components/profile/Reviews';
import InquiryModal from '@/components/profile/InquiryModal';
import { fetchPhotographerById } from '@/services/api';

export default function PhotographerProfilePage() {
  const router = useRouter();
  const { id } = router.query;
  const [photographer, setPhotographer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showInquiry, setShowInquiry] = useState(false);

  useEffect(() => {
    if (id) {
      const loadPhotographer = async () => {
        const data = await fetchPhotographerById(id);
        setPhotographer(data);
        setLoading(false);
      };
      loadPhotographer();
    }
  }, [id]);

if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <PhotographerProfile id={params.id} /> */}
      <ProfileHeader photographer={photographer} />
      <button 
        onClick={() => setShowInquiry(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg my-6"
      >
        Send Inquiry
      </button>
      <Gallery portfolio={photographer?.portfolio || []} />
      <Reviews reviews={photographer?.reviews || []} />
      
      {showInquiry && (
        <InquiryModal 
          photographer={photographer} 
          onClose={() => setShowInquiry(false)} 
        />
      )}
    </div>
  );
}
