import React from 'react'
import LogoutButton from '../login/register/logoutButton'
import Header from '../navigation/header'
import BottomNavBar from '../navigation/bottomNavBar'

function page() {
  return (
    <div>
        <Header />
        <div className='flex justify-center flex-col items-center pt-24'>
            <h1>Profile</h1>
            <LogoutButton />
        </div>
        <BottomNavBar />
    </div>
  )
}

export default page