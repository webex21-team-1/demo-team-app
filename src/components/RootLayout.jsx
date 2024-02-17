import "./RootLayout.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="main-layout">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
