import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

// const style = styled.article`
//   margin-bottom: 24px;
// `;

function HikeList() {
  const [hikes, setHikes] = useState([]);
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("/api/hikes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((r) => r.json())
      .then(data => {
        setHikes(data)
        console.log(hikes[0].reviews[0].body)
      });
  }, []);

  return (
    <Wrapper>
      {hikes.length > 0 ? (
        hikes.map((hike) => (
          <div key={hike.id}>
            <Box>
              <h2>{hike.name}</h2>
              <p>
                <em>Time to Complete: {hike.minutes_to_complete} minutes</em>
                &nbsp;·&nbsp;
                <em>Reviewed by {hike.users.length} users </em>
                &nbsp;·&nbsp;
                <cite>{hike.location}</cite>
                <ReactMarkdown>{hike.reviews[0].body}</ReactMarkdown>
              </p>
            </Box>
          </div>
        ))
      ) : (
        <>
          <h2>No Hikes Found</h2>
          <Button as={Link} to="/new">
            Make a New Hike
          </Button>
        </>
      )}
    </Wrapper>
  );
}



export default HikeList;
