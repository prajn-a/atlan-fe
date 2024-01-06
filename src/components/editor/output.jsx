import Loading from "../ui/loading";

const Output = ({ output, loading }) => {
  // console.log(output);
  // console.log(output.length);
  return (
    <div className="bg-gray-100 dark:bg-zinc-900 h-3/4">
      <h2 className="font-normal p-3 border-b border-gray-400 drop-shadow-md dark:border-zinc-700">
        Output
      </h2>

      <div className="flex justify-center items-center">
        {output?.length == 0 ? (
          <p className="my-32">Run a query to see output</p>
        ) : (
          <div>{loading ? <Loading /> : <div>Data table here</div>}</div>
        )}
      </div>
    </div>
  );
};

export default Output;
