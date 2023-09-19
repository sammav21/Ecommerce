import {useEffect, useState} from 'react';
import HomePlant from "@components/HomePlant";
import {client} from '@utils/client';

export default function ConditionalHome() {

    const [plants, setPlants] = useState([]);
    
    const responsive = {
      desktop: {
        breakpoint: {max: 2000, min: 0},
        items: 4
      }
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
          <h1>-</h1>
          <p>Discover everything you need to know about your plants, treat them with kindness and they will take care of you.</p>
      </div>
      <div className="button-Container">
        <button>Explore 's</button>
      </div>
      <div className="plantCarousel-Container w100 flex">
       
            {plants.map((plant, i) => (
              <HomePlant key={i} image={plant.image[0]} name={plant.name}/>
            ))}
    
        {/*maybe place image here of whatever is highlighted*/}
      </div>
    </>
  )
}
