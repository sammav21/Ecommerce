'use client'
import Link from "next/link"
import {CiSearch} from 'react-icons/ci';
import {LuShoppingCart} from 'react-icons/lu';
import {usePathname} from 'next/navigation';
import { Poppins } from "next/font/google";

 const poppins = Poppins({subsets: ['latin'], weight: ['400','700','800']});

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="w100 flex" style={poppins.style}>
      <div className="header-Left flex">
      <h1 >.Plants</h1>
      <nav>
        <Link className='link' id={pathname.includes('home') ? 'currentPage' : undefined} href='/home'>Home</Link>
        <Link className='link' id={pathname.includes('shop') ? 'currentPage' : undefined} href='/shop'>Shop</Link>
        <Link className='link' id={pathname.includes('about') ? 'currentPage' : undefined} href='/about'>About</Link>
      </nav>
      </div>
      <div className="header-Right">
        <span><CiSearch style={{width: '1.5rem', height: 'auto', color: '#272D4E', cursor: 'pointer'}}/></span>
        <span><LuShoppingCart style={{width: '1.5rem', height: 'auto', marginLeft: '1.25rem', color: '#272D4E', cursor: 'pointer'}}/></span>
      </div>
    </header>
  )
}
