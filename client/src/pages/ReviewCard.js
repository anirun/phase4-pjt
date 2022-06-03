import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { Box, Button } from '../styles';

const ReviewCard = ({review}) => {
    const [reviewObj, setReviewObj] = useState(review);
    const [errors, setErrors] = useState([]);
    const {id} = useParams();
    const history = useHistory();
    useEffect(() => {
        if(!reviewObj) {
        fetch(`/api/reviews/${id}`)
        .then(r => r.json())
        .then(r => {
            setReviewObj(r)
        }
            )}
    }, [reviewObj, id]);

    function deleteReview() {
        setErrors([]);
        fetch(`/api/reviews/${reviewObj.id}`, {
            method: 'DELETE'
        })
        .then((r) => {
            if (r.ok) {
                history.push('/hikes')
            } else {
                r.json().then((error) => setErrors(error.errors));
            }
            
        })
    }

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
                    <Button onClick={deleteReview}>Delete Review</Button>

                </p>
            </Box>
        </div>
    )
}

export default ReviewCard;