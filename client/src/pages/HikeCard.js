import React, {useEffect, useState} from 'react';
import {useLocation, useHistory, useParams} from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { Box, Button } from '../styles';

const HikeCard = ({hike}) => {
    const [hikeObj, setHikeObj] = useState(hike);
    const {id} = useParams();
    const history = useHistory();
    const location = useLocation();

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

    const onClick = () => {
        history.push(`/hikes/${hike.id}/reviews`)
    }

    if (!hikeObj) return <div>Loading...</div>;

    return(
        <div>
            <Box key={hikeObj.id}>
                <h2>{hikeObj.name || hikeObj.hike.name}</h2>
                <p>
                    <em>Time to Complete: {hikeObj.minutes_to_complete || hikeObj.hike.minutes_to_complete} minutes </em>
                    &nbsp; &nbsp;
                    <em>Reviewed by {hikeObj?.users.length || hikeObj.hike?.users.length || 0 } hikers </em>
                    &nbsp; &nbsp;
                    <cite>{hikeObj.location || hikeObj.hike.location}</cite>
                    <div>
                    <ReactMarkdown>{hikeObj.description || hikeObj.hike.description}</ReactMarkdown>
                    </div>
                    
                    { location.pathname === "/profile" ? null : <Button onClick={onClick}>See All Reviews</Button>}
                </p>
            </Box>
        </div>
    )
}

export default HikeCard;