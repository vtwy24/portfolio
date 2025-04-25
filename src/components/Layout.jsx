import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./Layout.css";

function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="layout-container">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
