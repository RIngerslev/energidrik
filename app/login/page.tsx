"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Use this for client-side navigation
import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';  // Adjust the path to your firebaseConfig

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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      {/* Display error message if there is one */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <p>
        Don't have an account? <Link href="/register">Create one here</Link>
      </p>
    </div>
  );
}

export default LoginPage;
