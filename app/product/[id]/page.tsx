
import { fetchDataFirebase } from '../../firebase/firebase';

export async function generateStaticParams() {
    const posts = await fetchDataFirebase("drink");
   
    return posts.map((post) => ({
      id: post.id,
    }))
  }

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    return (
        <div>{id}</div>
    );
}