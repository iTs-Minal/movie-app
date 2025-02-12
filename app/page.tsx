// import { useState } from "react";
import Footer from "./Components/Footer";
import HomeHeader from "./Components/HomeHeader";

import HomeNavbar from "./Components/HomeNavbar";

import { DarkModeProvider } from "./ThemeToggle/themeToggle";


export default function Home() {

  return (
   <>
   <DarkModeProvider>
   <HomeNavbar/>
   <HomeHeader/>
   <Footer/>
   </DarkModeProvider>
   </>
  );
}
