import StarRating from "@/components/StarRating";
import React from "react";
import axios from "axios";
import ReviewList from "./ReviewList";
import Review from "@/data/Review";

const ReviewApp = () => {
  
  const [reviewData, setReviewData] = React.useState<Review[]>([]);

  // move this to a custom hook later
  React.useEffect(() => {
    axios.get("http://localhost:3000/api/reviews")
    .then(res => {
      const data = res.data;
      setReviewData(res.data);
    })
    // add error handling
  }, []);

  const submitReview = (newReview: Review) => {
    // typically this would be a post call to the API
    const updatedReviewData = [newReview, ...reviewData];
    setReviewData(updatedReviewData);
  }

  return (
    <div>
      <StarRating submitReview={submitReview}/>      
      <ReviewList reviews={reviewData}/>
    </div>
  );
};

ReviewApp.displayName = "ReviewApp";
export default ReviewApp;