'use client'
import React, { useEffect, useState } from 'react'
import { fetchSingleDocumentFirebase, updateProductFirebase } from './firebase/firebase';
import Link from 'next/link';
import Rating from './rating';
import Image from 'next/image';

export default function Product(props: {id: string}) {

    const [drink, setDrink] = useState<any>(null);
    const [rating, setRating] = useState<number>(0);

    useEffect(() => {
        const fetchDrink = async () => {
            console.log(props.id);
            if (props.id) {
                const drinkData = await fetchSingleDocumentFirebase("drink", props.id); // Fetch the specific drink using the id
                setDrink(drinkData);
            }
        };
        fetchDrink();
    }, [props.id]);
    
    const updateDrink = async (rating: number ) => {
        try {
          await updateProductFirebase("drink", props.id, rating);
          console.log("Drink updated with ID: ", props.id);
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
                <Rating className="flex" count={6} value={drink.rating/drink.amountRating} />
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
}