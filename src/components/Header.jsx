import { useState } from "react";
import Navigation from "./Navigation";
import HeaderBar from "./HeaderBar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <HeaderBar handleDrawerToggle={handleDrawerToggle} />
      <Navigation isOpen={isOpen} handleDrawerToggle={handleDrawerToggle} />
    </>
  );
}

export default Header;
