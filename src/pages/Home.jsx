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
    
    <div className="w-full h-screen flex flex-col bg-gray-50 overflow-hidden">

      
      <Navbar />

      
      <div className="flex flex-1 overflow-hidden">

        
        
        <div className="flex-shrink-0">
          <Sidebar />
        </div>

        
      
        <div className="flex-1 flex flex-col overflow-hidden">

          
          <SubNavbar onCreate={() => setOpen(true)} />

          
          
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-3 gap-5">
              {Array(6).fill(0).map((_, i) => (
                <Card key={i} />
              ))}
            </div>
          </div>

          
          <Footer />

        </div>

      </div>

      
      <Modal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Home;