import { Outlet } from "react-router";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { createContext } from "react";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export const UserContext = createContext();

function App() {
  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <UserContext.Provider value={{ showSearch, setShowSearch }}>
        <Header />
        <NavBar />
      </UserContext.Provider>

      <Outlet/>

      <Footer />
    </>
  );
}

export default App;
