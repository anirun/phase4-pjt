import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { Box, Button } from '../styles';

const HikeCard = ({hike}) => {
    const [hikeObj, setHikeObj] = useState(hike);
    const {id} = useParams();
    useEffect(() => {
        if(!hikeObj) {
        fetch(`/api/hikes/${id}`)
        .then(r => r.json())
        .then(hike => setHikeObj(hike))
        }
    }, [hikeObj, id]);

    if (!hikeObj) return <div>Loading...</div>;

    return(
        <div>
            <Box>
                <h2>{hikeObj.name}</h2>
                <p>
                    <em>Time to Complete: {hikeObj.minutes_to_complete} minutes </em>
                    <em>Reviewed by {hikeObj.users.length} hikers </em>
                    &nbsp; &nbsp;
                    <cite>{hikeObj.location}</cite>
                    <ReactMarkdown>{hikeObj.reviews}</ReactMarkdown>
                </p>
            </Box>
        </div>
    )
}

export default HikeCard;