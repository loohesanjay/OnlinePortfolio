import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.jsx"; // Make sure you created this component

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
