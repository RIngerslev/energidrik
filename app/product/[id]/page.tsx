// pages/product/[id].tsx

import Image from "next/image";
import Link from "next/link";
import { fetchSingleDocumentFirebase } from "../../firebase/firebase"; // Adjust the path if necessary
import Rating from "../../rating"; // Adjust the import if necessary

export default async function ProductPage ({ params }: { params: { id: string } }) {

    const { id } = await params;
    const drink = await fetchSingleDocumentFirebase("drink", id);

    //const [rating, setRating] = useState<number>(0);

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
        </div>
    );
};
