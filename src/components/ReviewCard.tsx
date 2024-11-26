const ReviewCard = () => {

    return (
        <div className="p-4">
        <div className="max-w-lg p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
            <div className="flex items-center">
                <span className="text-yellow-500 text-sm font-medium">★★★★☆</span>
            </div>
            <div>
                <p className="text-gray-800 font-semibold text-sm">Taylor J.</p>
            </div>
        </div>
        <div>
        </div>
        </div>
        
        <div className="text-sm text-gray-700">
            <p>
            This Yolk location is nestled in Wicker Park. There is tons of street parking in the area, 
            but no dedicated lot or parking garages that I noticed. It was a beautiful day and we sat by the window. 
            They were not especially busy. Yolk is always bright and clean, but there is definitely a corporate vibe...
            </p>
        </div>
        </div>
        </div>
    );
  };
  
  ReviewCard.displayName = "ReviewCard";
  export default ReviewCard;
