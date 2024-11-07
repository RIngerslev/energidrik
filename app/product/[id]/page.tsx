// pages/product/[id].tsx

import Product from "./product";


export default function ProductPage ({ params }: { params: { id: string } }) {

    return (
        <Product id={params.id} />
    );
};
