import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { scroller } from "react-scroll";

type ScrollContextType = (section: string) => void;
export const ScrollContext = React.createContext<ScrollContextType | undefined>(undefined);

const Layout: React.FC = () => {
  const scrollToSection = (section: string) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <ScrollContext.Provider value={scrollToSection}>
      <Header />
      <Outlet />
      <Footer />
    </ScrollContext.Provider>
  );
};

export default Layout;
