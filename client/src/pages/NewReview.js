import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

function NewReview({ user }) {
  const [title, setTitle] = useState("Not All Who Wander Are Lost");
  const [rating, setRating] = useState("5");
  const [body, setBody] = useState(`How was your hike?`);
  const [hikeId, setHikeId] = useState(`Choose a hike!`);
  const [hikeList, setHikeList] = useState([])
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch(`api/hikes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((r) => r.json())
    .then((d) => {
      setHikeList(d)
      console.log(hikeList)
    })
  }, []) 

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`/api/hikes/${hikeId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        rating,
        body,
        hike_id: hikeId,
        user_id: user.id
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push(`/hikes/${hikeId}/reviews`);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>How was your hike?</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="rating">Rating</Label>
            <Input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="body">Tell us more...</Label>
            <Textarea
              id="body"
              rows="10"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </FormField>
          <FormField>  
            <Label htmlFor="hike"> Where'd you hike? </Label>  
            <select id= "hike" onChange={(e) => setHikeId(e.target.value)} >  
              <option> ---Choose your hike!--- </option>  
              {hikeList.map((hike) =>
              <option key={hike.id} value={hike.id}>
                {hike.name}
              </option>
              )}
            </select>  
          </FormField>  
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Review"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
      <WrapperChild>
        <h1>{title}</h1>
        <p>
          <em>Rating: {rating} of 5 stars</em>
          &nbsp;·&nbsp;
          <cite>By {user.username}</cite>
        </p>
        <ReactMarkdown>{body}</ReactMarkdown>
      </WrapperChild>
    </Wrapper>
  );
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

export default NewReview;
