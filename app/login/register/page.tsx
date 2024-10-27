// pages/register.tsx
"use client"
import { useState } from 'react';
import { auth } from '../../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import BottomNavBar from '@/app/navigation/bottomNavBar';
import Header from '@/app/navigation/header';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [passwordStrength, setPasswordStrength] = useState<string>('');
  const router = useRouter();

  // Function to check password strength
  const checkPasswordStrength = (password: string) => {
    if (password.length < 6) {
      setPasswordStrength('Too short');
    } else if (password.length < 10) {
      setPasswordStrength('Weak');
    } else if (/(?=.*[0-9])/.test(password) && /(?=.*[!@#$%^&*])/.test(password)) {
      setPasswordStrength('Strong');
    } else {
      setPasswordStrength('Medium');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordStrength === 'Too short' || passwordStrength === 'Weak') {
      setError('Password is not strong enough.');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/login'); // Redirect to the login page after successful registration
    } catch (err) {
      const errorMessage = (err as { code: string }).code;
      switch (errorMessage) {
        case 'auth/email-already-in-use':
          setError('The email address is already in use.');
          break;
        case 'auth/invalid-email':
          setError('The email address is not valid.');
          break;
        case 'auth/weak-password':
          setError('The password is too weak.');
          break;
        default:
          setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className="flex flex-col items-center justify-center pt-20 mt-10">
        <div className="flex flex-col space-y-4">
          <h1>Create Account</h1>
          <form onSubmit={handleRegister}>
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
              onChange={(e) => {
                setPassword(e.target.value);
                checkPasswordStrength(e.target.value); // Check password strength on change.
              }}
              required
              className="p-2 border border-gray-300 rounded"
            />
            <p>Password Strength: {passwordStrength}</p>
            <button type="submit">Sign Up</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Register;