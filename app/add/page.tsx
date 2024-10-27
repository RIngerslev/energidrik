"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Header from '../navigation/header';
import { storage } from '../firebase/firebaseConfig';
import Image from 'next/image';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDataFirebase } from '../firebase/firebase';
import BottomNavBar from '../navigation/bottomNavBar';
import LogoutButton from '../login/register/logoutButton';

function addenergidrik() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [taste, setTaste] = useState('');
  const [look, setLook] = useState('');
  const [avg] = useState(taste);
  const [yourRating] = useState(taste);
  const [amountRating] = useState(1);

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedURL, setUploadedURL] = useState<string | null>(null);

  const router = useRouter()

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

    console.log(brand, name, taste, look, uploadedURL);
    try {
      await addDataFirebase("drink", { brand, name, avg, amountRating, yourRating, taste, look, image: uploadedURL });
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
      <div className="flex flex-col items-center justify-center mt-24">
        <div className="flex flex-col space-y-4">
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
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="number"
            name="taste"
            placeholder="Taste"
            value={taste}
            onChange={(e) => setTaste(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="number"
            name="look"
            placeholder="Look"
            value={look}
            onChange={(e) => setLook(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
          />
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
          <button onClick={handleSubmit} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
        <BottomNavBar />
    </div>
  );
}

export default addenergidrik