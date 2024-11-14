import Link from 'next/link';
import { fetchDataFirebase, fetchSingleDocumentFirebase } from '../../firebase/firebase';
import Rating from '@/app/rating';
import Image from 'next/image';
import RatingComponent from './ratingComponent';
import { Suspense } from 'react';

export async function generateStaticParams() {
    const posts = await fetchDataFirebase("drink");
   
    return posts.map((post) => ({
      id: post.id
    }))
  }

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    let rating = 0

    const drink = await fetchSingleDocumentFirebase("drink", id);

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
      <Suspense>
        <RatingComponent id={drink.id}/>
      </Suspense>
  </div>  
    );
}