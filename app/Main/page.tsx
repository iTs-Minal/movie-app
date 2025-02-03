import Header2 from '@/app/Components/Second Page/Header2'
import MainPage from '@/app/Components/Second Page/MainPage'
import React from 'react'
import Navbar2 from '../Components/Second Page/Navbar2'
import { DarkModeProvider } from '../themeToggle'

const page = () => {
  return (
    <div className='dark:bg-darkTheme'>
    <DarkModeProvider>
      <Navbar2/>
      <Header2/>
      <MainPage/>
    </DarkModeProvider>
    </div>
  )
}

export default page
