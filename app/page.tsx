import Header from "./Components/First page/Header";
import Navbar from "./Components/First page/Navbar";
import { DarkModeProvider } from "./themeToggle";


export default function Home() {
  return (
   <>
   <DarkModeProvider>

   <Navbar/>
   <Header/>
   </DarkModeProvider>
   </>
  );
}
