import Image from "next/image";
import rectangle from '@public/assets/Rectangle.png';
import plant from '@public/assets/rubber-fig-para-rubber-tree-houseplant-natural-rubber-plant.png';
import { Poppins } from "next/font/google";

const poppins = Poppins({subsets: ['latin'], weight: ['400', '600','700','800']});
export default function Home() {

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
      <div className="plantCarousel-Container">
        <div className="plant-Container flex-col">
          <Image src={plant} alt="plant" style={{width: '75%', height: 'auto', position: 'absolute', top: '-10%'}}/>
          <p>plant name</p>
        </div>
      </div>
    </section>
  )
}
