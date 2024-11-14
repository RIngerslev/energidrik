'use client'
import { updateProductFirebase } from '@/app/firebase/firebase';
import Rating from '@/app/rating'
import React, { useState } from 'react'

export default function RatingComponent(id: string) {
    const [rating, setRating] = useState<number>(0);

    const updateDrink = async (rating: number) => {
        try {
            await updateProductFirebase("drink", id, rating);
            console.log("Drink updated with ID: ", id);
        } catch (error) {
            console.error("Error updating drink: ", error);
        }
    };

    return (
        <div>
            <Rating className="flex" edit={true} value={rating} onChange={(value) => setRating(value)} />
            <button onClick={() => updateDrink(rating)} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg">
                Give vote
            </button>
        </div>
    )
}