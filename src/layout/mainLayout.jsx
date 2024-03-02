import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/navbar";

function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
}

export default MainLayout;
