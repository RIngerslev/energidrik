"use client"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { addDataFirebase } from '../firebase/firebase';
import { storage } from '../firebase/firebaseConfig';
import BottomNavBar from '../navigation/bottomNavBar';
import Header from '../navigation/header';
import Rating from '../rating';

function addenergidrik() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [rating, setRating] = React.useState(0);
  const [avg, setAvg] = useState(0);
  const [yourRating, setYourRating] = useState(0);
  const [amountRating] = useState(1);

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedURL, setUploadedURL] = useState<string | null>(null);

  const [disabledBtn, setDisabledBtn] = useState(true);

  const router = useRouter()

  // check if all required fields are filled in and not null or '' and then set the state of requiredFields to true
  useEffect(() => {
    if (brand && name && rating && uploadedURL) {
      setDisabledBtn(false)
    } else {
      setDisabledBtn(true)
    }
  }), [brand, name, rating, uploadedURL]

  useEffect(() => {
    setAvg(rating);
    setYourRating(rating);
  }, [rating]);
    


  const handleFileChange = (e: any) => {
    console.log(e.target.files?.[0]);
    setFile(e.target.files?.[0] || null);
  }

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    const storageRef = ref(storage, `images/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const Url = await getDownloadURL(storageRef);
      setUploadedURL(Url);
      console.log("File uploaded successfully:", Url);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploading(false);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(brand, name, rating, uploadedURL);
    try {
      await addDataFirebase("drink", { brand, name, avg, amountRating, yourRating, rating, image: uploadedURL });
    } catch (error) {
      console.error("Error adding data to Firebase:", error);
      // You can also add additional error handling logic here, such as displaying an error message to the user
    }
    // Efter succesfuld tilføjelse af drink, omdiriger til "/"
    router.push('/');
  };

  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className="flex flex-col items-center justify-center mt-32 pb-36">
        <div className="flex flex-col space-y-4">
          <div>
            <label htmlFor='brand'>Brand </label>
            <input
              list='brands'
              type="text"
              name="brand"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <datalist id="brands">
              <option value="Monster" />
              <option value="Redbull" />
              <option value="Booster" />
              <option value="Cult" />
              <option value="Rockstar" />
            </datalist>
          </div>
          <div>
            <label htmlFor='name'>Name </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className='flex'>
            <h1 className='mr-2'>Rating </h1>
            <Rating className="flex" value={rating} edit={true} onChange={(value) => setRating(value)} />
          </div>
          <div>
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={handleFileChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleUpload} disabled={uploading} >
            {uploading ? 'Uploading...' : 'Upload billede'}
          </button>
          {uploadedURL && (
            <div className='flex justify-center items-center mt-2'>
              <Image
                src={uploadedURL}
                alt="Uploaded image"
                width={300}
                height={300}
              />
            </div>
          )}
          <button onClick={handleSubmit} className={disabledBtn ? 'p-2 text-white rounded bg-gray-500 cursor-not-allowed' : 'p-2 text-white rounded bg-blue-500 hover:bg-blue-600'} disabled={disabledBtn}>
            Submit
          </button>
        </div>
      </div>
        <BottomNavBar />
    </div>
  );
}

export default addenergidrik