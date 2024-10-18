"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { deleteDataFirebase, fetchDataFirebase } from "./firebase";
import Header from "./header";
import BottomNavBar from "./bottomNavBar";

export default function Home() {

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
    <div className="">
      <Header />
      <div className="col-span-1 mb-5">
        <div className="flex flex-col items-center justify-center"></div>
        {drinks.map((drink) => (
          <div key={drink.id} className="flex flex-col-2 space-x-4 justify-between bg-white h-30 rounded-xl shadow-xl mt-5 p-3 mx-4 lg:mx-72 overflow-hidden">
            <div className="flex-1">
              <h1>{drink.name}</h1>
              <div className="flex">
              <svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 512 512" xmlSpace="preserve">
                <polygon fill="#FFD248" points="392.111,222.395 195.711,470.784 253.476,280.16 114.84,280.16 224.593,8.665 340.123,8.665 
                  253.476,222.395 "/>
                <path d="M174.167,512l67.63-223.176H101.992L218.751,0h134.235l-86.647,213.73h143.669L174.167,512z M127.689,271.495h137.467
                  l-47.9,158.072l156.959-198.508H240.614l86.647-213.73h-96.824L127.689,271.495z"/>
                </svg>
              </div>
              <h2>Taste: {drink.taste}</h2>
              <h2>Look: {drink.look}</h2>
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
          </div>
        ))}
      </div>
      <BottomNavBar />
    </div>
  );
}
