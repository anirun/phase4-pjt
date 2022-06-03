import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { Box, Button } from '../styles';

const HikeCard = ({hike}) => {
    const [hikeObj, setHikeObj] = useState(hike);
    const {id} = useParams();
    console.log(hikeObj)
    useEffect(() => {
        if(!hikeObj) {
        fetch(`/api/hikes/${id}`)
        .then(r => r.json())
        .then(h => {
            setHikeObj(h)
            console.log(h)
            })
        }
    }, [hikeObj, id]);

    if (!hikeObj) return <div>Loading...</div>;

    return(
        <div>
            <Box key={hikeObj.id}>
                <h2>{hikeObj.name}</h2>
                <p>
                    <em>Time to Complete: {hikeObj.minutes_to_complete} minutes </em>
                    &nbsp; &nbsp;
                    <em>Reviewed by {hikeObj.users.length} hikers </em>
                    &nbsp; &nbsp;
                    <cite>{hikeObj.location}</cite>
                    <div>
                    {hikeObj.reviews.length > 0 ?
                        (<ReactMarkdown>{hikeObj.reviews[0].body}</ReactMarkdown>) : (<ReactMarkdown>Not yet reviewed!</ReactMarkdown>)
                    }
                    </div>
                    
                    <Button>See All Reviews</Button>
                </p>
            </Box>
        </div>
    )
}

export default HikeCard;