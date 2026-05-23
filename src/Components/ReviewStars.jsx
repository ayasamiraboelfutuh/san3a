// src/Components/home/ReviewStars.jsx
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

export default function ReviewStars({ reviews, showCount = true }) {
  const count = reviews?.length || 0;
  const avg = count > 0 ? reviews.reduce((a, b) => a + b.stars, 0) / count : 0;

  return (
    <div className="d-flex align-items-center">
      <div className="text-warning d-flex">
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            {i < Math.floor(avg) ? <IoStar /> : 
             i < avg ? <IoStarHalf /> : <IoStarOutline />}
          </span>
        ))}
      </div>
      {showCount && <span className="ms-2 text-primary fw-bold">{count} reviews</span>}
    </div>
  );
}