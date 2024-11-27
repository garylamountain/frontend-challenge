import Review from "@/data/Review";

type ReviewProps = {
    review: Review;
};

const ReviewCard = ({ review }: ReviewProps) => {
    return (
        <div className="p-4 w-full min-w-[478px]">
            <div className="max-w-lg p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
                <div className="flex items-center gap-3 mb-2">
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                        <svg
                            className="absolute w-12 h-12 text-gray-400 -left-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-800 font-semibold text-sm">
                            {review.author}
                        </p>
                        <div className="flex items-center">
                            {[...Array(review.rating)].map((_, index) => (
                                <span
                                    key={index}
                                    className="text-yellow-500 text-sm font-medium"
                                >
                                    {"\u2605"}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-sm text-gray-700">
                    <p>{review.review}</p>
                </div>
            </div>
        </div>
    );
};

ReviewCard.displayName = "ReviewCard";
export default ReviewCard;
