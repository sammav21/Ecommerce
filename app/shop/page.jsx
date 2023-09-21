import ShopPlant from '@components/ShopPlant';
import plant1 from '@public/assets/sarah-dorweiler-ALtNa-uKy3M-unsplash.jpg';
import plant2 from '@public/assets/feey-bwsTJMnhcwE-unsplash.jpg';
import plant3 from '@public/assets/feey-1gwjE0c3PSQ-unsplash.jpg'
import { Poppins } from "next/font/google";

 const poppins = Poppins({subsets: ['latin'], weight: ['400', '800']});

export default function Shop() {
  const plants = [
    {
      image: plant1,
      name: 'plant 1',
      price: '$10'
    },
    {
      image:plant2,
      name: 'plant 2',
      price: '$20'
    },
    {
      image:plant3,
      name: 'plant 3',
      price: '$30'
    }
  ]
  return (
    <section className="shop-Container flex-col-center">
      <h1 style={poppins.style}>Shop</h1>
      <div className='shopMenu-Container flex-row-center w100' style={poppins.style} >
        <p>All plants</p>
        <p>Sort by</p>
      </div>
      <div className='shopItems-Container flex-row-center w100' style={poppins.style}>
        {plants.map((plant, i) => (<ShopPlant image={plant.image} key={i} name={plant.name} price={plant.price}/>))}
      </div>
    </section>
  )
}
