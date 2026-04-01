import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-6 h-[56px] border-t border-gray-200 bg-white">

      
      <p className="text-[13px] text-black">
        6 rows
      </p>

      
      <div className="flex items-center gap-4 text-[13px] text-black">

        
        <div className="flex items-center gap-2">
          <span>Rows per page</span>
          <select className="border border-gray-300 rounded-md px-2 py-1 text-[13px] outline-none">
            <option>10</option>
          </select>
        </div>

        
        <span>page 1 of 1</span>

        
        <div className="flex items-center gap-2">

          <button className="p-1 border border-gray-200 rounded-md">
            <ChevronDoubleLeftIcon className="w-4" />
          </button>

          <button className="p-1 border border-gray-200 rounded-md">
            <ChevronLeftIcon className="w-4" />
          </button>

          <button className="p-1 border border-gray-200 rounded-md">
            <ChevronRightIcon className="w-4" />
          </button>

          <button className="p-1 border border-gray-200 rounded-md">
            <ChevronDoubleRightIcon className="w-4" />
          </button>

        </div>

      </div>
    </div>
  );
};

export default Footer;