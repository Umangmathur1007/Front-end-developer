import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex bg-gray-50">
      <Sidebar />

      <div className="flex-1">
        <Header onCreate={() => setOpen(true)} />

        <div className="p-6">
          <h1 className="text-lg font-semibold mb-4">
            Knowledge Base
          </h1>

          <div className="grid grid-cols-3 gap-4">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Card key={i} />
              ))}
          </div>
        </div>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Home;