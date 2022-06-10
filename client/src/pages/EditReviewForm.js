import {useState} from "react";
import {useHistory} from 'react-router-dom';
import styled from "styled-components";
import { Button, FormField, Input, Label, Textarea } from "../styles";

const EditReviewForm = ({reviewObj, handleUpdate, handleError}) => {
    const history = useHistory();
    const [review, setReview] = useState({
        title: reviewObj.title,
        rating: reviewObj.rating,
        body: reviewObj.body,
    })

    const handleChange = (e) => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(review.title)

        fetch(`/api/reviews/${reviewObj.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: review.title, 
                rating: review.rating, 
                body: review.body
            })
        })
        .then((r) => {
            if (r.status === 200) {
                r.json()
                .then(data => {
                    handleUpdate(data)
                    history.push(`/hikes`)
            })
            } else {
                r.json()
                .then(error => console.log(error))
            }
        })
        .catch(err => console.log(err.message))
    }

    return (
        <Wrapper>
            <WrapperChild>
            <h2>Edit Review</h2>
            <FormField onSubmit={handleSubmit}>
                <Label htmlFor="title">Title</Label>
                <Input 
                    onChange={handleChange} 
                    type="text" 
                    name="title" 
                    value={review.title} required/>
                <Label htmlFor="rating">Rating</Label>
                <Input 
                    onChange={handleChange} 
                    type="integer" 
                    name="rating" 
                    value={review.rating} required/>
                <Label htmlFor="body">Body</Label>
                <Textarea 
                    onChange={handleChange} 
                    type="text" 
                    name="body" 
                    value={review.body}/>
                <Button color="primary" type="submit" value="Update Review" onClick={handleSubmit}>Update Review</Button>
            </FormField>
            </WrapperChild>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default EditReviewForm;