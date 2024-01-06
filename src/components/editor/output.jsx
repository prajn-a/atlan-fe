import Loading from "../ui/loading";
import Table from "./table";

const Output = ({ output, loading }) => {
  return (
    <div className="flex flex-col h-3/4">
      {/* heading  */}
      <div className="w-full border-t dark:border-zinc-700">
        <h2 className="font-normal p-3 border-b border-gray-400 drop-shadow-md dark:border-zinc-700 ">
          Output
        </h2>
      </div>

      {output.length < 1 ? (
        <p className="my-32 text-center text-sm text-zinc-600">
          Run a query to see output
        </p>
      ) : (
        <div>{loading ? <Loading /> : <Table output={output} />}</div>
      )}
    </div>
  );
};

export default Output;
