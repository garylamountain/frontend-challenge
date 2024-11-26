import { useState, useEffect } from "react";
import axios from "axios";
import Review from "@/data/Review";

const useFetchReviewData = (page: number = 1) => {
  const [reviewData, setReviewData] = useState<Review[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchReviews();
  }, [page]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/reviews", {
        params: { page, pageSize: 5 },
      });
      setReviewData(response.data);
    } catch (error) {
      setError(error as Error);
      console.error("Error fetching reviews:", error);
    }
  };

  return { reviewData, setReviewData, error };
};

export default useFetchReviewData;
