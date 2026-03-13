import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.tsx";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex flex-col grow overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
