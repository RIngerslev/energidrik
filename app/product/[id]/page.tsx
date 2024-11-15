"use client";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import { fetchSingleDocumentFirebase, updateProductFirebase } from "../../firebase/firebase"; // Adjust the path if necessary
import Rating from "../../rating"; // Adjust the import if necessary
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";
export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const [drink, setDrink] = useState<any>(null);
  const [rating, setRating] = useState<number>(0);

  const { id } = use(params);

  useEffect(() => {
    const fetchDrink = async () => {
      console.log(id);
      if (id) {
        const drinkData = await fetchSingleDocumentFirebase("drink", id); // Fetch the specific drink using the id
        setDrink(drinkData);
      }
    };
    fetchDrink();
  }, [id]);

  const updateDrink = async (rating: number) => {
    try {
      await updateProductFirebase("drink", id, rating);
      console.log("Drink updated with ID: ", id);
      const updatedDrinkData = await fetchSingleDocumentFirebase("drink", id);
      setDrink(updatedDrinkData);
    } catch (error) {
      console.error("Error updating drink: ", error);
    }
  };

  if (!drink) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="flex flex-col items-center py-24">
      <Link href="/">
        <button className="absolute top-0 left-0 p-4 bg-gray-200 hover:bg-gray-300 text-gray-600">
          Back to Homepage
        </button>
      </Link>
      <h2 className="mt-4 font-semibold">{drink.brand}</h2>
      <h1 className="text-2xl font-bold">{drink.name}</h1>
      <div className="flex items-center mt-2">
        <Rating className="flex" count={6} value={drink.rating / (drink.amountRating || 1)} />
        <span className="ml-2">Ratings: ({drink.amountRating})</span>
      </div>
      <Image
        src={drink.image}
        width={200}
        height={200}
        alt="Drink Image"
        className="rounded-lg shadow-lg"
      />
      <h1 className="text-2xl font-bold">Your vote</h1>
      <Rating className="flex" edit={true} value={rating} onChange={(value) => setRating(value)} />
      <button onClick={() => updateDrink(rating)} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg">
        Give vote
      </button>
    </div>
  );
};