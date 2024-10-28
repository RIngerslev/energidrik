"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Use this for client-side navigation
import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';  // Adjust the path to your firebaseConfig
import Header from '../navigation/header';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Router for redirection

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');  // Clear any previous errors

    try {
      // Sign in with email and password using Firebase
      await signInWithEmailAndPassword(auth, email, password);

      // Redirect to the homepage after successful login
      router.push('/');
    } catch (err: any) {
      // Handle potential errors
      const errorMessage = err.message;

      // Display appropriate error messages based on Firebase error codes
      if (err.code === 'auth/user-not-found') {
        setError('No user found with this email.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email format.');
      } else {
        setError(errorMessage); // Default error message
      }
    }
  };

  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className="flex flex-col items-center justify-center pt-20 mt-10">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col space-y-4 mt-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded"
            />
            <button type="submit" className='p-2 bg-green-500 text-white rounded hover:bg-green-600'>Login</button>
            </div>
        </form>

        {/* Display error message if there is one */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <p className='mt-4'>
          Don't have an account? <Link href="/login/register" className='text-blue-500 hover:text-blue-700'>Create one here</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
