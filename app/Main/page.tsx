import HeaderMain from '@/app/Components/Second Page/HeaderMain'
import MainPage from '@/app/Components/Second Page/MainPage'
import React from 'react'
import NavbarMain from '../Components/Second Page/NavbarMain'
import { DarkModeProvider } from '../themeToggle'

const page = () => {
  return (
    <div className='bg-slate-200 dark:bg-darkTheme'>
    <DarkModeProvider>
      <NavbarMain/>
      <HeaderMain/>
      <MainPage/>
    </DarkModeProvider>
    </div>
  )
}

export default page
