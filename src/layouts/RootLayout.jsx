import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

const RootLayout = () => {
  return (
    <div className="bg-white max-w-5xl mx-auto p-5">
      <HeaderLayout />
      <main className="min-h-screen py-3 border-t-2">
        <Outlet />
      </main>
      <FooterLayout />
    </div>
  );
};

export default RootLayout;
