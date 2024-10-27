"use client"
import BottomNavBar from "./navigation/bottomNavBar";
import Header from "./navigation/header";
import HomeRatingPage from "./homeRatingPage";
import { AuthProvider } from "./login/authProvider";

export default function Home() {

  return (
    <AuthProvider>
      <div className="flex flex-col h-screen">
          <Header />
          <HomeRatingPage />
          <BottomNavBar />
      </div>
    </AuthProvider>
  );
}
