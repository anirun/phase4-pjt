import React from 'react';
import {useHistory} from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { Box, Button } from '../styles';

const HikeReviewCard = ({review}) => {
    const history = useHistory();

    function deleteReview() {
        fetch(`/api/reviews/${review.id}`, {
            method: 'DELETE'
        })
        .then((r) => {
            if (r.ok) {
                history.push('/hikes')
            } else {
                return "Oops!"
            }
        })
    }

    if (!review) return <div>Loading...</div>;

    return(
        <div>
            <Box key={review.id}>
                <h2>{review.hike.name}</h2>
                <cite>{review.hike.location}</cite>
                <h3>{review.title}</h3>
                <em>Reviewed by {review.user.username} </em>
                <p>
                    <em>Time to Complete: {review.hike.minutes_to_complete} minutes </em>
                    &nbsp; &nbsp;
                    <ReactMarkdown>{review.body}</ReactMarkdown>
                    <Button onClick={deleteReview}>Delete Review</Button>
                
                </p>
            </Box>
        </div>
    )
}

export default HikeReviewCard;