'use client'
import { urlFor } from '@utils/client';
import Image from 'next/image';
import { Poppins } from "next/font/google";
import { client } from "@utils/client";
import { useState, useEffect } from 'react';
const poppins = Poppins({subsets: ['latin'], weight: ['400', '800']});

export default function Product({params}) {
  const [plant, setPlant] = useState(null); // Initialize as null or with a loading state
  const slug = params.slug;

  useEffect(() => {
    async function fetchPlantData() {
      try {
        const query = `*[_type == 'plant' && slug.current == '${slug}'][0]`;
        const plantData = await client.fetch(query);
        setPlant(plantData); // Update the component state with the fetched data
      } catch (error) {
        console.error('Error fetching plant data:', error);
      }
    }
    fetchPlantData();
  }, [slug]); // Run the effect whenever the slug parameter changes

  if (!plant) {
    return <div>Loading...</div>; // or handle the loading state as needed
  }

  return (
    <section className='flex-col-center section-margin'>
      <div className='flex-row-center w100'>
        <div className='product-ContainerLeft flex'>
          <div className='verticalSlide flex-col'>
            {plant.image?.map((image, i) => (
              <img key={i} src={urlFor(image)} alt="plant" style={{width: '90%', height: 'auto', objectFit: 'fill', paddingBottom: '0.5rem'}}/>
            ))}
          </div>
          <img className='mainImage' alt='plant' src={urlFor(plant.image[0])} style={{width: '75%', height: 'auto', objectFit: 'cover'}} />
        </div>
        <div className='product-ContainerRight flex-col' style={poppins.style}>
          <div className='info-Container flex-col'>
            <div className='infoTitle'>
              <h1>{plant.name}</h1>
              <p>{plant.price}</p>
            </div>
            <p className='description'>{plant.description}</p>
          </div>
          <div className='buttons-Container flex'>
              <input type='number' defaultValue='1'/>
              <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

// export async function getDetails(slug) {
//     const query = `*[_type == 'plant' && slug.current == '${slug}'][0]`;
//     const plant = await client.fetch(query)
//   return plant;
// }
