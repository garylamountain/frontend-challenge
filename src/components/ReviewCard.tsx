import Review from "@/data/Review";

type ReviewProps = {
    review: Review
};

const ReviewCard = ({review}: ReviewProps) => {

    return (
        <div className="p-4">
        <div className="max-w-lg p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
            <div className="flex items-center">
            {[...Array(review.rating)].map(() => (
                <span className="text-yellow-500 text-sm font-medium">{"\u2605"}</span>
            ))}
            </div>
            <div>
                <p className="text-gray-800 font-semibold text-sm">{review.author}</p>
            </div>
        </div>
        <div>
        </div>
        </div>
        
        <div className="text-sm text-gray-700">
            <p>
            {review.review}
            </p>
        </div>
        </div>
        </div>
    );
  };
  
  ReviewCard.displayName = "ReviewCard";
  export default ReviewCard;
