"use client"
import BottomNavBar from "./bottomNavBar";
import Header from "./header";
import HomeRatingPage from "./homeRatingPage";

export default function Home() {

  return (
    <div className="flex flex-col h-screen">
      <div className="h-[8%]">
        <Header />
      </div>
      <div className="h-[84%] flex-1 overflow-y-auto">
        <HomeRatingPage />
      </div>
      <div className="h-[8%]">
        <BottomNavBar />
      </div>
    </div>
  );
}
