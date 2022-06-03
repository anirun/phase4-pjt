import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { Box, Button } from '../styles';

const ReviewCard = ({review}) => {
    const [reviewObj, setReviewObj] = useState(review);
    const {id} = useParams();
    useEffect(() => {
        if(!reviewObj) {
        fetch(`/api/reviews/${id}`)
        .then(r => r.json())
        .then(r => {
            setReviewObj(r)
            console.log(reviewObj)
        }
            )}
    }, [reviewObj, id]);

    if (!reviewObj) return <div>Loading...</div>;

    return(
        <div>
            <Box key={review.id}>
                <h2>{reviewObj.name}</h2>
                <p>
                    <em>Time to Complete: {reviewObj.hike.minutes_to_complete} minutes </em>
                    &nbsp; &nbsp;
                    <em>Reviewed by  </em>
                    &nbsp; &nbsp;
                    <cite>{reviewObj.hike.location}</cite>
                    <ReactMarkdown>{reviewObj.body}</ReactMarkdown>
                    <Button>See All Reviews</Button>
                </p>
            </Box>
        </div>
    )
}

export default ReviewCard;