import {useEffect, useState} from 'react';
import HomePlant from "@components/HomePlant";
import {client} from '@utils/client';

export default function ConditionalHome() {

    const [plants, setPlants] = useState([]);
    const [plantInFocus, setPlantInFocus] = useState('Bonsai')

    const focusPlant = (name) => {
      setPlantInFocus(name)
    }

    useEffect(() => {
        const fetchPlants = async() => {
            const query = '*[_type == "plant"]';
            const data = await client.fetch(query);
            setPlants(data) 
        }
        fetchPlants();
    }, [])
  return (
    <>
      <div className="description-Container">
          <h1>{plantInFocus}</h1>
          <p>Discover everything you need to know about your plants, treat them with kindness and they will take care of you.</p>
      </div>
      <div className="button-Container">
        <button>Explore {plantInFocus}'s</button>
      </div>
        <div className="plantCarousel-Container flex" >
            {plants.map((plant, i) => (
              <HomePlant key={i} image={plant.image[0]} name={plant.name} focusPlant={focusPlant} plantInFocus={plantInFocus}/>
            ))}
        </div>
    </>
  )
}
