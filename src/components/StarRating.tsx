import Star from "@/components/Star";
import React from "react";
import Spinner from "./Spinner";
import Review from "@/data/Review";

type StarRatingProps = {
  submitReview: (newReview: Review) => void;
};

const StarRating = ({ submitReview }: StarRatingProps) => {

  const [rating, setRating] = React.useState<number>(0);
  const [name, setName] = React.useState<string>("");
  const [review, setReview] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleClick = (star: number) => {
    setRating(star);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    field: "name" | "review"
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
        id: 3,
        rating,
        review,
        author: name || "Anonymous",
      })
      setLoading(false);
      setRating(0);
      setName("");
      setReview("");
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
            />
        ))}
      </div>
      <textarea
        id="name"
        rows={1}
        className="block mt-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Full Name"
        value={name}
        onChange={(event) => handleChange(event, "name")}
      />
      <textarea
        id="review"
        rows={4}
        className="block mt-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Start your review (optional)..."
        value={review}
        onChange={(event) => handleChange(event, "review")}
      />
      <button
        type="submit"
        className="mt-10 h-10 px-6 font-semibold rounded-md bg-black text-white cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
        disabled={rating === 0 || loading}
        onClick={handleSubmit}
      >
        {loading ? <Spinner /> : 'Submit Review'}
      </button>
    </section>
  );
};

StarRating.displayName = "StarRating";
export default StarRating;