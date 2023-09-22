'use client'
import ShopPlant from '@components/ShopPlant';

import { Poppins } from "next/font/google";
import { fetchHomePagePlants } from '@utils/fetchHomePagePlants';

 const poppins = Poppins({subsets: ['latin'], weight: ['400', '800']});

export default function Shop() {
  const plants = fetchHomePagePlants();
  console.log(plants);
  return (
    <section className="shop-Container flex-col-center">
      <h1 style={poppins.style}>Shop</h1>
      <div className='shopMenu-Container flex-row-center w100' style={poppins.style} >
        <p>All plants</p>
        <p>Sort by</p>
      </div>
      <div className='shopItems-Container flex-row-center w100' style={poppins.style}>
        {plants.map((plant, i) => (<ShopPlant image={plant.image[0]} key={i} name={plant.name} price={plant.price} slug={plant.slug.current} />))}
      </div>
    </section>
  )
}
