import Link from "next/link"
import {CiSearch} from 'react';

export default function Nav() {

  return (
    <header className="w100 flex">
      <h1 className="logo">.Plants</h1>
      <nav>
        <Link href='/home'>Home</Link>
        <Link href='/shop'>Shop</Link>
        <Link href='/about'>About</Link>
      </nav>
      <div className="header-right">
        <span>{CiSearch}</span>
      </div>
    </header>
  )
}
