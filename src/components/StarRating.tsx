import Star from "@/components/Star";
import React from "react";

const StarRating = () => {

  const [rating, setRating] = React.useState<number>(0);

  const handleClick = (star: number) => {
    setRating(star);
  };

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-row-reverse">
        {[5, 4, 3, 2, 1].map((id) => (
          <div key={id}>
            <Star
              starId={id}
              marked={rating >= id}
              onClick={() => handleClick(id)}
            />
          </div>
        ))}
      </div>
      <input
        type="submit"
        className="mt-10 h-10 px-6 font-semibold rounded-md bg-black text-white cursor-pointer"
        value="Submit review"
      />
    </section>
  );
};

StarRating.displayName = "StarRating";
export default StarRating;