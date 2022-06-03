import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import ReviewCard from './ReviewCard';

function HikeReviewsList() {
  const [reviews, setReviews] = useState([]);
  const {id} = useParams();


  useEffect(() => {
    fetch(`/api/hikes/${id}/reviews`)
      .then((r) => r.json())
      .then(data => {
        setReviews(data)
      });
  });
  
  const renderReviews = reviews.map(review => <ReviewCard key={review.id} review={review}/>)

  return (
    <div>
      {renderReviews}
    </div>
  );
}



export default HikeReviewsList;
