"use client";

import { Customer, Product, Category, Shipper } from "@/data/data";
import { Database } from "lucide-react";

const Schema = () => {
  const tableSchema = () => {
    return [
      {
        table: "Customer",
        schema: Object.keys(Customer[0]),
      },
      {
        table: "Product",
        schema: Object.keys(Product[0]),
      },
      {
        table: "Category",
        schema: Object.keys(Category[0]),
      },
      {
        table: "Shipper",
        schema: Object.keys(Shipper[0]),
      },
    ];
  };

  return (
    <div className="w-1/4 h-screen border-l border-gray-400 dark:border-zinc-800 px-2 ">
      <h2 className="font-normal p-3 border-b border-gray-400 drop-shadow-md dark:border-zinc-700">
        Table Schema
      </h2>

      {/* schema  */}
      <div className="flex flex-col gap-4 2xl:gap-8 my-4 2xl:my-4">
        {tableSchema().map((item) => (
          <div key={item.table} className="cursor-pointer">
            <h4 className="flex items-center gap-2 2xl:text-lg px-2">
              <Database size={16} /> {item.table}
            </h4>

            <ul className="my-2 2xl:my-3">
              {item.schema?.map((schemaItem) => (
                <li
                  className="text-sm cursor-pointer mt-[4px]  2xl:mt-1"
                  key={schemaItem}
                >
                  <span className="border-gray-500  dark:border-gray-500 border-b border-l h-4 w-2 inline-block ml-4 relative top-[-3px]"></span>
                  <span>{schemaItem}</span>
                  <span className="text-gray-500 pl-1">[varchar]</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schema;
