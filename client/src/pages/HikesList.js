import { useEffect, useState } from "react";
import HikeCard from './HikeCard';

function HikesList() {
  const [hikes, setHikes] = useState([]);

  useEffect(() => {
    fetch("/api/hikes")
      .then((r) => r.json())
      .then(data => {
        setHikes(data)
      });
  }, []);

  const renderHikes = hikes.map((hike) => <HikeCard key={hike.id} hike={hike} />)

  return (
    <div>
      {renderHikes}
    </div>
  );
}



export default HikesList;
