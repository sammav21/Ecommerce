"use client"
import { client } from "@utils/client";
import { useEffect, useState } from "react";

export const fetchPlantDetails = (slug) => {
    const [plant, setPlant] = useState({})
    useEffect(() => {
        const fetchData = async() => {
            const query = `*[_type == 'plant' && slug.current == '${slug}'}][0]`;
            const data = await client.fetch(query);
            setPlant(data) 
            console.log(plant);
        }
        fetchData();
    }, []);
  return (
    plant
  )
}
