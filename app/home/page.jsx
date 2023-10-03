'use client'
import Image from "next/image";
import rectangle from '@public/assets/Rectangle.png';
import { Poppins } from "next/font/google";
import { urlFor } from "@utils/client";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomePlant from "@components/HomePlant";
import {useEffect, useState} from 'react';
import { client } from "@utils/client";

const poppins = Poppins({subsets: ['latin'], weight: ['400', '600','700','800']});


export default function Home() {

  const [plants, setPlants] = useState([]);

  useEffect(() => {
        const fetchData = async() => {
            const query = '*[_type == "plant"]';
            const data = await client.fetch(query);
            setPlants(data) 
        }
        fetchData();
    }, []);

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

  return (
    <section className="home-Container flex-col" style={poppins.style}>
      <Image src={rectangle} alt='rectangle' style={{width: '70%', height: 'auto', position: 'absolute', zIndex: '-1', top: '0', left: '0', objectFit: 'cover'}} />
      <div className="description-Container">
          <h1>{plants.length ? plants.at(plantInFocus).name: '...'}</h1>
          <p>Discover everything you need to know about your plants, treat them with kindness and they will take care of you.</p>
      </div>
      <div className="button-Container">
        <button>{plants.length ? `Explore ${plants.at(plantInFocus).name}'s` : 'Explore'}</button>
      </div>
      <div className='flex' style={{width: '90%', position: 'relative'}}>
        <Carousel containerClass='plantCarousel' 
        responsive={responsive} partialVisible={true}
        swipeable={true} draggable={true} showDots={true} keyBoardControl={true} 
        focusOnSelect={true} rtl={true}>
              {plants.map((plant, i) => (
                <HomePlant key={i} index={i} image={plant.image[0]} name={plant.name} updateHighlight={updateHighlight} />
              ))}
        </Carousel>
        {plants.length && <img src={urlFor(plants.at(plantInFocus).image[0])} alt="plant" style={{width: '30%', height: 'auto', position: 'absolute', bottom: 0, right: 0}} />}
      </div>
    </section>
  )
}
