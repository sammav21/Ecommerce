'use client'
import Image from "next/image";
import rectangle from '@public/assets/Rectangle.png';
import { Poppins } from "next/font/google";
import ConditionalHome from "@components/ConditionalHome";


const poppins = Poppins({subsets: ['latin'], weight: ['400', '600','700','800']});

export default function Home() {
 
  
  return (
    <section className="home-Container flex-col" style={poppins.style}>
      <Image src={rectangle} alt='rectangle' style={{width: '70%', height: 'auto', position: 'absolute', zIndex: '-1', top: '0', left: '0', objectFit: 'cover'}} />
      <ConditionalHome />
    </section>
  )
}
