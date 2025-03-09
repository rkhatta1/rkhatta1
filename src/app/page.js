import React from 'react';
import HomePage from "./pages/HomePage";
import HomePageMid from "./pages/HomePageMid";
import HomePageMobile from "./pages/HomePageMobile";

export default function Home() {

  return (
    <main>
      <div className='hidden lg:flex'>
      <HomePage />
      </div>
      <div className='hidden sm:flex lg:hidden'>
      <HomePageMid />
      </div>
      <div className='flex sm:hidden'>
      <HomePageMobile />
      </div>
    </main>
  );
}
