'use client'
import Image from "next/image";
import rectangle from '@public/assets/Rectangle.png';
import { Poppins } from "next/font/google";
import {useEffect, useState} from 'react';
import HomePlant from "@components/HomePlant";
import {client} from '@utils/client';

const poppins = Poppins({subsets: ['latin'], weight: ['400', '600','700','800']});

export default function Home() {
 
  const [plants, setPlants] = useState([]);
   
  useEffect(() => {
    const fetchPlants = async() => {
      const query = '*[_type == "plant"]';
      const data = await client.fetch(query);
      setPlants(data) 
  }
  fetchPlants();
  }, [])
  return (
    <section className="home-Container flex-col" style={poppins.style}>
      <Image src={rectangle} alt='rectangle' style={{width: '70%', height: 'auto', position: 'absolute', zIndex: '-1', top: '0', left: '0', objectFit: 'cover'}} />
      <div className="description-Container">
        <h1>Value carousel</h1>
        <p>Discover everything you need to know about your plants, treat them with kindness and they will take care of you.</p>
      </div>
      <div className="button-Container">
      <button>Explore More</button>
      </div>
      <div className="plantCarousel-Container flex">
        {plants.map((plant, i) => (
          <HomePlant key={i} image={plant.image[0]} name={plant.name} />
        ))}
      </div>
    </section>
  )
}
