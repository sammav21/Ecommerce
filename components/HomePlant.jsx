import { urlFor } from "@utils/client";

export default function HomePlant({image, name, updateHighlight, index}) {
  return (
    <div className="plant-Container flex-col" onClick={() => updateHighlight(index)}>
      <img src={urlFor(image)} alt="plant" style={{width: 'auto', height: '100%'}} />
      <p>{name}</p>
    </div>
  )
}