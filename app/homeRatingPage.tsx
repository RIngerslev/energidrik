"use client"
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import { fetchDataFirebase } from './firebase/firebase';
import Rating from "./rating";
import lightningIcon from "../public/lightningIcon.svg";

function homeRatingPage() {

      // State til at gemme drinks og users
  const [drinks, setDrinks] = useState<any[]>([]);

  // Hent data fra Firebase ved første render
  useEffect(() => {
    const fetchData = async () => {
      const drinkData = await fetchDataFirebase("drink");
      setDrinks(drinkData); // Opdater drinks state
    };
    fetchData();
  }, []);

  return (
    <div className="col-span-1 pt-24 pb-24">
        <li className="list-none py-1"> {drinks.map((drink) => (
            <ul key={drink.id} className="flex flex-col-2 space-x-4 justify-between bg-[white] h-30 rounded-xl shadow-xl p-3 my-4 mx-4 lg:mx-72 overflow-hidden">
                <div className="flex-1">
                <h1>{drink.name}</h1>
                <div className="flex">              
                    <h2>Taste: </h2>
                    <Rating className="flex" count={6} value={drink.taste} />
                </div>
                <div className="flex">              
                    <h2>Look: </h2>
                    <Rating className="flex" count={6} value={drink.look} />
                </div>
                <div className="flex">
                    <h2>Ratings: ( 2 )</h2>
                </div>
                </div>
                <div className="flex-2 justify-end items-center h-full">
                <Image
                    src={drink.image}
                    width={100}
                    height={100}
                    alt="Drink Image"
                    className="p-2 rounded-full shadow-lg object-cover object-fit: cover object-position: center"
                    style={{
                    aspectRatio: '1/1',
                    }}
                />
                </div>
            </ul>
          ))}  
        </li>
    </div>
  )
}

export default homeRatingPage