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
        }
            )}
    }, [reviewObj, id]);

    if (!reviewObj) return <div>Loading...</div>;

    return(
        <div>
            <Box key={reviewObj.id}>
                <h2>{reviewObj.hike.name}</h2>
                <cite>{reviewObj.hike.location}</cite>
                <h3>{reviewObj.title}</h3>
                <em>Reviewed by {reviewObj.user.username} </em>
                <p>
                    <em>Time to Complete: {reviewObj.hike.minutes_to_complete} minutes </em>
                    &nbsp; &nbsp;
                    <ReactMarkdown>{reviewObj.body}</ReactMarkdown>
                    <Button>See All Reviews</Button>
                </p>
            </Box>
        </div>
    )
}

export default ReviewCard;