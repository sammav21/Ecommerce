'use client'
import {useEffect, useState} from 'react';
import { client } from "@utils/client";


export const fetchHomePagePlants = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const query = '*[_type == "plant"]';
            const data = await client.fetch(query);
            setPlants(data) 
        }
        fetchData();
    }, []);
  return (
    plants
  )
}
