import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    // ✅ FIX 1: add bg color + overflow hidden
    <div className="w-full h-screen flex flex-col bg-gray-50 overflow-hidden">

      {/* 🔷 TOP NAVBAR */}
      <Navbar />

      {/* 🔽 BELOW NAVBAR */}
      <div className="flex flex-1 overflow-hidden">

        {/* 🔹 SIDEBAR */}
        {/* ✅ FIX 2: prevent sidebar shrinking */}
        <div className="flex-shrink-0">
          <Sidebar />
        </div>

        {/* 🔹 MAIN CONTENT AREA */}
        {/* ✅ FIX 3: allow vertical scroll ONLY here */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* SUB NAVBAR */}
          <SubNavbar onCreate={() => setOpen(true)} />

          {/* CONTENT */}
          {/* ✅ FIX 4: make content scrollable */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-3 gap-5">
              {Array(6).fill(0).map((_, i) => (
                <Card key={i} />
              ))}
            </div>
          </div>

          {/* FOOTER */}
          {/* ✅ FIX 5: keep footer fixed at bottom */}
          <Footer />

        </div>

      </div>

      {/* MODAL */}
      <Modal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Home;