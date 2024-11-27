import { useState, useEffect } from "react";
import axios from "axios";
import Review from "@/data/Review";

const useFetchReviewData = (page: number = 1) => {
  const [reviewData, setReviewData] = useState<Review[]>([]);
  const [lastPage, setLastPage] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchReviews();
  }, [page]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/reviews", {
        params: { page, pageSize: 5 },
      });
      setReviewData(response.data.reviews);
      setLastPage(response.data.lastPage);
    } catch (error) {
      setError(error as Error);
      console.error("Error fetching reviews:", error);
    }
  };

  return { reviewData, setReviewData, lastPage, error };
};

export default useFetchReviewData;
