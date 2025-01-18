"use client"
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import { fetchDataFirebase } from './firebase/firebase';
import Rating from "./rating";
import Link from "next/link";
import usersIcon from "../public/usersIcon.svg"

function homeRatingPage() {

      // State til at gemme drinks og users
  const [drinks, setDrinks] = useState<any[]>([]);

  // Hent data fra Firebase ved første render
  useEffect(() => {
    const fetchData = async () => {
      const drinkData = await fetchDataFirebase("drink");
       // Sort drinks based on average rating
       const sortedDrinks = drinkData.sort((a, b) => (b.rating / (b.amountRating || 1)) - (a.rating / (a.amountRating || 1)));
      setDrinks(sortedDrinks); // Opdater drinks state
    };
    fetchData();
  }, []);

  return (
    <div className="col-span-1 pt-[85px] pb-24">
        <li className="list-none py-1"> {drinks.map((drink) => (
          <Link key={drink.id} href={`/product/${drink.id}`}>
            <ul key={drink.id} className="flex flex-col-2 space-x-4 justify-between bg-[white] h-30 rounded-xl shadow-xl p-3 my-4 mx-4 lg:mx-72 overflow-hidden">
              <div className="flex-1">
              <div className="flex mb-1 font-semibold">
                <h2>{drink.name}</h2>
              </div>
              <div className="flex mb-1">
                  <h2 className="mr-2 bg-green-700 text-white rounded-lg px-2">{drink.brand}</h2>
                  <h2 className="mr-1">( {drink.amountRating} )</h2>
              </div>
              <div className="flex ml-0.5">              
                  <Rating className="flex" count={6} value={drink.rating / (drink.amountRating || 1)} />
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
          </Link>
          ))}  
        </li>
    </div>
  )
}

export default homeRatingPage