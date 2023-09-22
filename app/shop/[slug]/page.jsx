import plant1 from '@public/assets/sarah-dorweiler-ALtNa-uKy3M-unsplash.jpg';
import plant2 from '@public/assets/feey-bwsTJMnhcwE-unsplash.jpg';
import plant3 from '@public/assets/feey-1gwjE0c3PSQ-unsplash.jpg'
import Image from 'next/image';
import { Poppins } from "next/font/google";

 const poppins = Poppins({subsets: ['latin'], weight: ['400', '800']});

export default function Product() {
  const plant = 
    {
      images: [plant1, plant2, plant3, plant1, plant2, plant3],
      name: 'plant 1',
      price: '$10',
      slug: 'plant1'
    }
  

  return (
    <section className='flex-col-center section-margin'>
      <div className='flex-row-center w100'>
        <div className='product-ContainerLeft flex'>
          <div className='verticalSlide flex-col'>
            {plant.images?.map((image, i) => (
              <Image key={i} src={image} alt="plant" style={{width: '90%', height: 'auto', objectFit: 'fill', paddingBottom: '0.5rem'}}/>
            ))}
          </div>
          <Image className='mainImage' src={plant1} style={{width: '75%', height: 'auto', objectFit: 'cover'}} />
        </div>
        <div className='product-ContainerRight flex-col' style={poppins.style}>
          <div className='info-Container flex-col'>
            <div className='infoTitle'>
              <h1>{`plant name`}</h1>
              <p>price</p>
            </div>
            <p className='description'>With their small, silvery, gray-green leaves, olive trees (this specific variety is the Common Olive Tree) make beautiful houseplants. These Mediterranean plants need a lot of bright, direct sunlight. South and west facing windows are ideal. Pet friendly.</p>
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
