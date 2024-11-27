import Review from "@/data/Review";
import React from "react";
import ReviewCard from "./ReviewCard";

type ListProps = {
    reviews: Review[]
};
  

const ReviewList = ({ reviews }: ListProps) => {

  return (
    <ul className="list-disc">
        {reviews.map(review => {
            return (
                <div key={review.id}>
                    <ReviewCard review={review}/>
                </div>
            )
        })}
    </ul>
  );
};

ReviewList.displayName = "ReviewList";
export default ReviewList;