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
      console.log(data)
    })
    // add error handling
  }, []);

  return (
    <div>
      <StarRating />
      <ReviewList reviews={reviewData}/>
    </div>
  );
};

ReviewApp.displayName = "ReviewApp";
export default ReviewApp;