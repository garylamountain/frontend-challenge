import StarRating from "@/components/StarRating";
import React from "react";
import ReviewList from "./ReviewList";
import Review from "@/data/Review";
import useFetchReviewData from "@/data/useFetchReviewData";

const ReviewApp = () => {
  const { reviewData, setReviewData, error } = useFetchReviewData();
  
  const submitReview = (newReview: Review) => {
    // typically this would be a post call to the API
    const updatedReviewData = [newReview, ...reviewData];
    setReviewData(updatedReviewData);
  }

  return (
    <div>
      <StarRating submitReview={submitReview}/> 
      {error && 
        <div className="p-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
          <span className="font-medium">Failed to load reviews: </span>{error.message}
        </div>
      }     
      <ReviewList reviews={reviewData}/>
    </div>
  );
};

ReviewApp.displayName = "ReviewApp";
export default ReviewApp;