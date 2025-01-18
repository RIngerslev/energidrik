import React from 'react'
import LogoutButton from '../login/register/logoutButton'
import Header from '../navigation/header'
import BottomNavBar from '../navigation/bottomNavBar'

function page() {
  return (
    <div>
        <Header />
        <div className='flex justify-center items-center flex-col pt-40'>
            <h1>Profile</h1>
            <LogoutButton />
        </div>
        <BottomNavBar />
    </div>
  )
}

export default page