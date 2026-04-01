import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">

      {/* 🔹 Overlay */}
      <div
        className="flex-1 bg-black/30"
        onClick={onClose}
      ></div>

      {/* 🔹 Right Drawer */}
      <div className="w-[420px] h-full bg-white shadow-xl p-6 flex flex-col">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-[12px] font-semibold text-black">
              Create New Knowledge Base
            </h2>
            <p className="text-[12px] text-gray-500 mt-1 leading-[18px]">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>

          <XMarkIcon
            className="w-5 cursor-pointer text-gray-500"
            onClick={onClose}
          />
        </div>

        {/* FORM */}
        <div className="flex-1 overflow-y-auto space-y-4">

          {/* Name */}
          <div>
            <label className="text-[12px] text-gray-700 font-medium">
              Name (Cannot be edited later) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 h-9  text-[13px] outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-[13px] text-gray-700 font-medium">
              Description
            </label>
            <textarea
              placeholder="Description"
              rows={4}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
            ></textarea>
          </div>

          {/* Vector Store */}
          <div>
            <label className="text-[13px] text-gray-700 font-medium">
              Vector Store <span className="text-red-500">*</span>
            </label>
            <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none">
              <option>Qdrant</option>
            </select>
          </div>

          {/* Embedding Model */}
          <div>
            <label className="text-[13px] text-gray-700 font-medium">
              LLM Embedding Model <span className="text-red-500">*</span>
            </label>
            <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none">
              <option>text-embedding-ada-002</option>
            </select>
          </div>

        </div>

        {/* FOOTER BUTTON */}
        <div className="pt-4">
          <button className="w-full bg-[#4F46E5] text-white py-2 rounded-md text-sm font-medium hover:opacity-90">
            Create
          </button>
        </div>

      </div>
    </div>
  );
};

export default Modal;