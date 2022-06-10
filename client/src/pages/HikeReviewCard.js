import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { Box, Button } from '../styles';
import styled from "styled-components";
import EditReviewForm from './EditReviewForm';

const HikeReviewCard = ({user, review, handleError}) => {
    const history = useHistory();
    const {id} = useParams();
    const [reviewObj, setReviewObj] = useState(null);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (!review) {
            fetch(`/api/reviews/${id}`)
            .then((r) => r.json())
            .then(review => {
                setReviewObj(review)
            })
        }
    }, [review, id])

    const handleUpdate = (updatedReviewObj) => {
        setEditMode(false)
        setReviewObj(updatedReviewObj)
    }

    const handleClick = (e) => {
        if (e.target.name === "delete") {
            fetch(`/api/reviews/${review.id}`, {
                method: "DELETE"
            })
            .then(() => history.push("/"))
        } else {
            setEditMode(true)
        }
    }
    const finalReview = review ? review : reviewObj
    if (!review) return <div>Loading...</div>;

    return(
        <div>
            {!editMode ? <>
                <Wrapper>
                    <Box key={finalReview.id}>
                        <h2>{finalReview.hike.name}</h2>
                        <cite>Location: {finalReview.hike.location}</cite>
                        <h3>{finalReview.title}</h3>
                        <em>{finalReview.rating} of 5</em>
                        &nbsp; &nbsp;
                        <em>Reviewed by {finalReview.user.username} </em>
                        <p>
                            <em>Time to Complete: {finalReview.hike.minutes_to_complete} minutes </em>
                            &nbsp; &nbsp;
                            <ReactMarkdown>{finalReview.body}</ReactMarkdown>
                            { finalReview.user.id === user.id ? (
                            <>
                            <Button name="edit-mode" id="edit-btn" onClick={handleClick}>Edit</Button>
                            &nbsp; &nbsp;
                            <Button name="delete" id="delete-btn" onClick={handleClick}>Delete</Button>
                            </>
                            ) : null
                            }
                        </p>
                    </Box>
                </Wrapper>
                </> : 
                <Wrapper>
                    <EditReviewForm 
                        handleError={handleError} 
                        reviewObj={finalReview} 
                        handleUpdate={handleUpdate}
                        />
                </Wrapper>}
            {/* <Box key={review.id}>
                <h2>{review.hike.name}</h2>
                <cite>{review.hike.location}</cite>
                <h3>{review.title}</h3>
                <em>Reviewed by {review.user.username} </em>
                <p>
                    <em>Time to Complete: {review.hike.minutes_to_complete} minutes </em>
                    &nbsp; &nbsp;
                    <ReactMarkdown>{review.body}</ReactMarkdown>
                    <Button name="edit-mode" id="edit-btn" onClick={handleClick}>Edit</Button>
                    <Button name="delete" id="delete-btn" onClick={handleClick}>Delete</Button>
                </p>
            </Box> */}
        </div>
    )
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

export default HikeReviewCard;