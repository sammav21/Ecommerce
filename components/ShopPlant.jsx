import Link from "next/link";
import { urlFor } from '@utils/client';
export default function ShopPlant({image, name, price, slug}) {
  return (
    <Link href={`/shop/${slug}`}className="shopItem-Container flex-col-center">
        <img src={urlFor(image)} alt="plant" style={{width: '13rem', height: '20rem', objectFit: 'contain', borderRadius: '500px'}}/> {/*should be carousel of images when I import these, they won't be pngs but full images so styling applies to full pic not png*/}
        <div className="flex-col-center">
            <p>{name}</p>
            <p className="price">{price}</p>
        </div>
    </Link>
  )
}