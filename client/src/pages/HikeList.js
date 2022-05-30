import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function HikeList() {
  const [hikes, setHikes] = useState([]);

  useEffect(() => {
    fetch("/api/hikes")
      .then((r) => r.json())
      .then(setHikes);
  }, []);

  return (
    <Wrapper>
      {hikes.length > 0 ? (
        hikes.map((hike) => (
          <hike key={hike.id}>
            <Box>
              <h2>{hike.name}</h2>
              <p>
                <em>Time to Complete: {hike.minutes_to_complete} minutes</em>
                &nbsp;·&nbsp;
                <cite>{hike.location}</cite>
              </p>
              <ReactMarkdown>{hike.reviews}</ReactMarkdown>
            </Box>
          </hike>
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

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const hike = styled.article`
  margin-bottom: 24px;
`;

export default HikeList;
