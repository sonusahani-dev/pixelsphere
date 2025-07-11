import { format } from 'date-fns';

const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <p className="text-gray-500">No reviews yet.</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b pb-6 last:border-0">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold">{review.name}</h3>
              <span className="flex items-center text-yellow-500">
                {review.rating} ★
              </span>
            </div>
            
            <p className="text-gray-500 text-sm mt-1">
              {format(new Date(review.date), 'MMMM d, yyyy')}
            </p>
            
            <p className="mt-3 text-gray-700">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
