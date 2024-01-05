import React from "react";
import { Trash2 } from "lucide-react";

const availableQueries = [
  "Select * From Customer",
  "Select * From Product",
  "Select * From Category",
  "Select * From Shipper",
];

const History = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100  dark:bg-zinc-900  w-[300px] 2xl:w-[400px] h-fit py-4 rounded-lg">
      <h2 className="flex items-center justify-around font-semibold text-zinc-600 dark:text-zinc-300 w-full">
        History <Trash2 size={18} strokeWidth={2} />
      </h2>

      {/* map queries  */}
      <ul className="flex flex-col gap-4 my-6 cursor-pointer">
        {availableQueries.map((item) => (
          <li
            key={item}
            className="bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-gray-200 text-sm 2xl:text-base px-8 2xl:px-16 py-2 2xl:py-3 rounded-md"
          >
            {item} ;
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
