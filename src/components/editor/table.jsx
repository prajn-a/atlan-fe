import React from "react";

const Table = ({ output }) => {
  return (
    <div className="flex flex-col overflow-scroll h-screen">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 2xl:py-4 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 dark:border-zinc-800">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-zinc-600 overflow-scroll">
              <thead className="bg-gray-50 dark:bg-zinc-900">
                <tr>
                  {Object.keys(output[0]).map((item) => (
                    <th
                      key={item}
                      scope="col"
                      className="px-2 py-3 text-left text-xs font-medium 2xl:text-sm text-gray-500 uppercase tracking-wider"
                    >
                      {item.toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="bg-white dark:bg-[#141417] divide-y divide-gray-200 dark:divide-zinc-700">
                {output.map((item) => (
                  <tr key={item}>
                    {Object.values(item).map((itemValue) => (
                      <td
                        key={itemValue}
                        className="px-2 py-4 2xl:px-4 whitespace-nowrap text-xs 2xl:text-sm text-gray-500"
                      >
                        {itemValue}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
