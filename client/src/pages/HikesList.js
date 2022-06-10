import { useEffect, useState } from "react";
import HikeCard from './HikeCard';
import { Button } from "../styles";

function HikesList() {
  const [hikes, setHikes] = useState([]);

  useEffect(() => {
    fetch("/api/hikes")
      .then((r) => r.json())
      .then(data => {
        setHikes(data)
      });
  }, []);

  const viewAlphabetical = () => {
    fetch("/api/orderbyname")
    .then((r) => r.json())
    .then(data => {
      setHikes(data)
    })
  }
  const renderHikes = hikes.map((hike) => <HikeCard key={hike.id} hike={hike} />)

  return (
    <div>
      <Button onClick={viewAlphabetical}>View all hikes alphabetically</Button>
      {renderHikes}
    </div>
  );
}



export default HikesList;
