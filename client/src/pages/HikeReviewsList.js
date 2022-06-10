import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import HikeReviewCard from "./HikeReviewCard";

function HikeReviewsList({user}) {
  const [reviews, setReviews] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetch(`/api/hikes/${id}/reviews`)
      .then((r) => r.json())
      .then(data => {
        setReviews(data)
      });
  }, [id]);
  
  const renderReviews = reviews.map((review) => <HikeReviewCard key={review.id} review={review} user={user}/> )

  return (
    <div>
      {renderReviews}
    </div>
  );
}



export default HikeReviewsList;
