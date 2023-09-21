import Image from "next/image";
export default function ShopPlant({image, name, price}) {
  return (
    <span className="shopItem-Container flex-col-center">
        <Image src={image} alt="plant" style={{width: '13rem', height: '20rem', objectFit: 'cover', borderRadius: '500px'}}/> {/*should be carousel of images*/}
        <div className="flex-col-center">
            <p>{name}</p>
            <p className="price">{price}</p>
        </div>
    </span>
  )
}