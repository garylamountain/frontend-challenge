import { useState, useEffect } from "react";
import axios from "axios";
import Review from "@/data/Review";

const useFetchReviewData = (page: number = 1, pageSize: number = 5) => {
  const [reviewData, setReviewData] = useState<Review[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/reviews", {
          params: { page, pageSize },
        });
        setReviewData(response.data);
      } catch (error) {
        setError(error as Error);
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [page, pageSize]);

  return { reviewData, setReviewData, error };
};

export default useFetchReviewData;
