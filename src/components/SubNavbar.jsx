const SubNavbar = ({ onCreate }) => {
  return (
    <div className="h-[56px] flex items-center justify-between bg-white border-b border-gray-200 px-6">

      {/* LEFT TITLE */}
      <h6 className="text-[15px] leading - [20px] font-medium text-[#111827]">
        Knowledge Base
      </h6>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="h-9 border border-gray-300 px-3 rounded-md text-sm w-64 outline-none"
        />

        {/* Create Button */}
        <button
          onClick={onCreate}
          className="h-9 bg-[#4F46E5] text-white px-4 rounded-md text-sm font-medium hover:opacity-90"
        >
          + Create New
        </button>

      </div>
    </div>
  );
};

export default SubNavbar;