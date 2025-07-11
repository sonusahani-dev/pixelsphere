import Image from 'next/image';

const ProfileHeader = ({ photographer }) => {
 if (!photographer || typeof photographer !== 'object') return null; // ✅ additional safety

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <Image
         src={photographer.profilePic || '/images/default-art.jpg'}
          alt={photographer.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold">{photographer.name}</h1>
            <p className="text-gray-400 mt-1">{photographer.location}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-lg font-bold">
              {photographer.rating} ★
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-lg font-bold">
              ₹{photographer.price.toLocaleString()}
            </span>
          </div>
        </div>
        
        <p className="mt-4 text-gray-700 max-w-3xl">
          {photographer.bio}
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
