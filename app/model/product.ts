type Product = {
    brand: string;
    name: string;
    avg: number;
    amountRating: number;
    yourRating: number;
    rating: number;
    image: string;
};

type UpdatedProduct = {
    brand?: string;
    name?: string;
    amountRating?: number;
    rating?: number;
};