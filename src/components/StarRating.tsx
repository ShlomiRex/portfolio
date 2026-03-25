import { Star } from "lucide-react";

export type StarCount = 1 | 2 | 3;

interface StarRatingProps {
  rating: StarCount;
}

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${rating} out of 3 stars`}>
      {Array.from({ length: 3 }).map((_, starIndex) => {
        const isFilled = starIndex < rating;

        return (
          <Star
            key={`rating-${starIndex}`}
            className={`w-4 h-4 ${isFilled ? "text-amber-500 fill-current" : "text-amber-500/30 fill-transparent"}`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
