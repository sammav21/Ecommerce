'use client'
import {useEffect, useState} from 'react';
import {client} from '@utils/client';
import { urlFor } from "@utils/client";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomePlant from "@components/HomePlant";

export default function ConditionalHome() {

    const [plants, setPlants] = useState([]);
    const [plantInFocus, setPlantInFocus] = useState(0);

    const updateHighlight = (index) => {
      setPlantInFocus(index);
    }
    const responsive = {
      desktop: {
        breakpoint: {max: 2000, min: 0}, /*Update this during media query coding*/
        items: 3,
        partialVisibilityGutter: 20
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
          <h1>{plants.length ? plants.at(plantInFocus).name: '...'}</h1>
          <p>Discover everything you need to know about your plants, treat them with kindness and they will take care of you.</p>
      </div>
      <div className="button-Container">
        <button>{plants.length ? `Explore ${plants.at(plantInFocus).name}'s` : 'Explore'}</button>
      </div>
      <div className='flex' style={{width: '90%', position: 'relative'}}>
       <Carousel containerClass='plantCarousel' 
       responsive={responsive} partialVisbile={true} 
       swipeable={true} draggable={true} showDots={true} keyBoardControl={true} 
       focusOnSelect={true} rtl={true} 
       autoPlay={true} autoPlaySpeed={3000} rewind={true}rewindWithAnimation={true}>
            {plants.map((plant, i) => (
              <HomePlant key={i} index={i} image={plant.image[0]} name={plant.name} updateHighlight={updateHighlight} />
            ))}
        </Carousel>
        {plants.length && <img src={urlFor(plants.at(plantInFocus).image[0])} alt="plant" style={{width: '30%', height: 'auto', position: 'absolute', bottom: 0, right: 0}} />}
        </div>
      
    </>
  )
}
