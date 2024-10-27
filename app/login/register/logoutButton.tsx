"use client";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('user');  // Optional
      sessionStorage.removeItem('user');  // Optional

      router.push('/login');  // Redirect after logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <button onClick={handleLogout} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
      Log Out
    </button>
  );
};

export default LogoutButton;
