import { exportAsCSV, exportAsJSON } from "@/lib/actions";
import Button from "../ui/button";
import Loading from "../ui/loading";
import Table from "./table";

const Output = ({ output, loading }) => {
  const commonButtonClass = `bg-gray-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:bg-gray-200 hover:dark:bg-zinc-700 text-xs`;
  const disabled = output.length < 1 ? "opacity-50" : "";

  return (
    <div className="flex flex-col h-3/4">
      {/* heading  */}
      <div className="w-full flex justify-between border-b border-gray-400 dark:border-zinc-700">
        <h2 className="font-normal p-3  drop-shadow-md dark:border-zinc-700 ">
          Output
        </h2>

        <div className="flex gap-2 mx-8">
          <Button
            text="Export JSON"
            customClass={`${commonButtonClass} ${disabled} `}
            action={() => exportAsJSON(output)}
          />
          <Button
            text="Export CSV"
            customClass={`${commonButtonClass} ${disabled} `}
            action={() => exportAsCSV(output)}
          />
        </div>
      </div>

      {output.length < 1 ? (
        <p className="my-32 text-center text-sm dark: text-zinc-600 dark:text-zinc-300">
          Run a query to see output
        </p>
      ) : (
        <div>{loading ? <Loading /> : <Table output={output} />}</div>
      )}
    </div>
  );
};

export default Output;
