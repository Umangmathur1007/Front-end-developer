import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="w-full bg-[#1E1B4B] text-white flex items-center justify-between px-6 py-3">

      {/* LEFT */}
      <div className="flex items-center gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#4F46E5] rounded-full"></div>
          <span className="font-semibold text-sm">Workspace</span>
        </div>

        {/* Workspace 1 */}
        <div className="bg-[#4F46E5] px-3 py-1 rounded-full text-xs">
          Workspace 1
        </div>
      </div>

      {/* CENTER SEARCH */}
      <div className="flex items-center bg-white px-3 py-1.5 rounded-md w-[400px]">
        <MagnifyingGlassIcon className="w-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 w-full outline-none text-sm text-black"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <BellIcon className="w-5 cursor-pointer" />

        <div className="w-8 h-8 bg-gray-300 text-black rounded-full flex items-center justify-center text-sm font-medium">
          GK
        </div>
      </div>

    </div>
  );
};

export default Navbar;