import { urlFor } from "@utils/client";

export default function HomePlant({image, name, focusPlant, plantInFocus}) {
  return (
    <>
    {plantInFocus == name 
    ? <img className='plantInFocus' src={urlFor(image)} alt="plant" style={{width: '30%', height: 'auto'}}/>
    : <div className="plant-Container flex-col" onClick={() => focusPlant(name)}>
        <img src={urlFor(image)} alt="plant" style={{width: 'auto', height: '100%'}}/>
        <p>{name}</p>
      </div>}
  </>
  )
}