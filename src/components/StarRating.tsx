import Star from "@/components/Star";
import React from "react";
import Spinner from "./Spinner";
import Review from "@/data/Review";

type StarRatingProps = {
  submitReview: (newReview: Review) => void;
  numOfReviews: number;
};

const StarRating = ({ submitReview, numOfReviews }: StarRatingProps) => {

  const [rating, setRating] = React.useState<number>(0);
  const [name, setName] = React.useState<string>("");
  const [review, setReview] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  // only allow user to submit one review
  const [reviewSubmitted, setReviewSubmitted] = React.useState<boolean>(false);

  const handleClick = (star: number) => {
    setRating(star);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    field: string
  ) => {
    const value = event.target.value;
    if (field === "name") {
      setName(value);
    } else if (field === "review") {
      setReview(value);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    // emulate wait time for API call
    setTimeout(() => {
      submitReview({
        id: numOfReviews + 1,
        rating,
        review,
        author: name || "Anonymous",
      })
      setLoading(false);
      setRating(0);
      setName("");
      setReview("");
      setReviewSubmitted(true);
    }, 1000);
  }

  return (
    <section className="flex flex-col items-start">
      <div className="flex flex-row-reverse">
        {[5, 4, 3, 2, 1].map((id) => (
          <Star
            starId={id}
            marked={rating >= id}
            onClick={() => handleClick(id)}
            key={id}
          />
        ))}
      </div>

      <input
        id="name"
        type="text"
        className="block mt-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 disabled:cursor-not-allowed"
        placeholder="Full Name"
        maxLength={20}
        value={name}
        onChange={(event) => handleChange(event, "name")}
        disabled={reviewSubmitted}
      />

      <textarea
        id="review"
        rows={4}
        className="block mt-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 disabled:cursor-not-allowed"
        placeholder="Start your review (optional)..."
        value={review}
        onChange={(event) => handleChange(event, "review")}
        disabled={reviewSubmitted}
      />

      {
        reviewSubmitted ?
        <div className="p-4 mt-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
          <span className="font-medium">Success!</span> Thanks for your review.
        </div>
        :
        <button
          type="submit"
          className="mt-10 h-10 px-6 font-semibold rounded-md bg-black text-white cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={rating === 0 || loading}
          onClick={handleSubmit}
        >
          {loading ? <Spinner /> : 'Submit Review'}
        </button>
      }

    </section>
  );
};

StarRating.displayName = "StarRating";
export default StarRating;