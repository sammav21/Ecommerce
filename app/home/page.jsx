import Image from "next/image";
import rectangle from '@public/assets/Rectangle.png';
import { Poppins } from "next/font/google";

const poppins = Poppins({subsets: ['latin'], weight: ['400','700','800']});
export default function Home() {

  return (
    <section className="home-Container flex-col" style={poppins.style}>
      <Image src={rectangle} alt='rectangle' style={{width: '75%', height: 'auto', position: 'absolute', zIndex: '-1', top: '0', left: '0', objectFit: 'cover'}} />
      <div className="description-Container">
        <h1>Value carousel</h1>
        <p>Discover everything you need to know about your plants, treat them with kindness and they will take care of you.</p>
      </div>
      <button>Explore More</button>
      <div className="plantCarousel-Container">placeholder</div>
    </section>
  )
}
