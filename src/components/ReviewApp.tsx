import StarRating from "@/components/StarRating";
import React from "react";
import axios from "axios";

const ReviewApp = () => {

  // move this to a custom hook later
  React.useEffect(() => {
    axios.get("http://localhost:3000/api/reviews")
    .then(res => {
      const data = res.data;
      console.log(data)
    })
  }, []);

  return (
    <div>
      <StarRating />
    </div>
  );
};

ReviewApp.displayName = "ReviewApp";
export default ReviewApp;
