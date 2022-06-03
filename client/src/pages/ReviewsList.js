import { useEffect, useState } from "react";
import ReviewCard from './ReviewCard';

function ReviewsList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then(data => {
        setReviews(data)
      });
  }, []);
  
  const renderReviews = reviews.map(review => <ReviewCard key={review.id} review={review}/>)

  return (
    <div>
      {renderReviews}
    </div>
  );
}



export default ReviewsList;
