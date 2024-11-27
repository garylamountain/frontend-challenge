import StarRating from "@/components/StarRating";
import React, { useState } from "react";
import ReviewList from "./ReviewList";
import Review from "@/data/Review";
import useFetchReviewData from "@/data/useFetchReviewData";

const ReviewApp = () => {
  const [page, setPage] = useState(1);
  const { reviewData, setReviewData, error } = useFetchReviewData(page);

  const submitReview = (newReview: Review) => {
    // Typically this would be a POST call to the API
    const updatedReviewData = [newReview, ...reviewData];
    setReviewData(updatedReviewData);
  };

  const handlePrevious = () => {
    if(page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if(page !== 3) setPage(page + 1);
  };

  return (
    <div>
      <StarRating submitReview={submitReview} numOfReviews={reviewData.length} />
      {error && (
        <div className="p-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
          <span className="font-medium">Failed to load reviews: </span>{error.message}
        </div>
      )}
      <ReviewList reviews={reviewData} />
      <div className="flex justify-center items-center mt-4">
        <div
          onClick={handlePrevious}
          className={`relative inline-flex items-center rounded-l-md px-2 py-2 ${
            page > 1 ? "text-gray-400 hover:bg-gray-50 cursor-pointer" : "text-gray-300 cursor-not-allowed"
          } ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
        >
          <span className="sr-only">Previous</span>
          <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path
              fillRule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          onClick={handleNext}
          className={`relative inline-flex items-center rounded-r-md px-2 py-2 ${
            page !== 3 ? "text-gray-400 hover:bg-gray-50 cursor-pointer" : "text-gray-300 cursor-not-allowed"
          } ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
        >
          <span className="sr-only">Next</span>
          <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

ReviewApp.displayName = "ReviewApp";
export default ReviewApp;
