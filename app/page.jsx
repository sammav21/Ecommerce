import Image from "next/image";
import welcomeImage from '@public/assets/leaves-318743_1280.jpg';
import oneLeaf from '@public/assets/1-leaf.png';
import { Poppins } from "next/font/google";

 const poppins = Poppins({subsets: ['latin'], weight: ['800']});

const Welcome = () => {
  return (
    <div className="welcome-Container w100 h100" style={poppins.style}>
      <Image src={oneLeaf} alt='leaves' style={{width:'100%', height: '100%', objectFit: 'cover', 
      zIndex: '2', position: 'absolute',  transform: 'scaleX(-1)'}}/>
      <h1 className="welcome-Title">.Plants</h1>
      <Image src={welcomeImage} alt='leaves' style={{width:'100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)'}}/>
      
    </div>
  )
}

export default Welcome