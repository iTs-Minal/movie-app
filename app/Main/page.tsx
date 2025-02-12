import HeaderMain from '@/app/Components/MainHeader'
import MainPage from '@/app/Components/MainMovieSection'
import React from 'react'
// import NavbarMain from '../Components/Second Page/NavbarMain'
import { DarkModeProvider } from '../ThemeToggle/themeToggle'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div className='bg-[linear-gradient(to_left,rgba(147,197,253,0.3),rgba(100,116,139,0.3),rgba(103,232,249,0.3))]  dark:bg-darkTheme/70'>
    <DarkModeProvider>
      <HeaderMain/>
      <MainPage/>
      <Footer/>
    </DarkModeProvider>
    </div>
  )
}

export default page
