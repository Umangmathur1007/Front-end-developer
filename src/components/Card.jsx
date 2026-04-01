import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const Card = () => {
  return (
    <div className="bg-white border border-grey-200 rounded-lg">

    
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-[14px] font-medium text-[#111827]">
            Test
          </h3>
          <EllipsisVerticalIcon className="w-5 text-gray-400 cursor-pointer" />
        </div>

        <p className="text-[13px] text-gray-500 mt-2 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      
      <div className="border-t border-gray-200 px-4 py-2 bg-gray-50 rounded-b-lg">
        <p className="text-[12px] text-gray-400">
          Created On: 14/07/2025
        </p>
      </div>

    </div>
  );
};

export default Card;