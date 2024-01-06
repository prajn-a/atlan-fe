import History from "./history";
import Queries from "./queries";

const Sidebar = ({ setQuery, history, setHistory }) => {
  return (
    <div className="w-1/4 border-r border-gray-400 dark:border-zinc-800">
      <h2 className="font-normal px-4 p-3 border-b border-gray-400 drop-shadow-md dark:border-zinc-700">
        Options
      </h2>

      <div className="flex flex-col items-center gap-10 2xl:gap-14 my-4">
        {/* available queries  */}
        <Queries setQuery={setQuery} />

        {/* history  */}
        <History
          history={history}
          setHistory={setHistory}
          setQuery={setQuery}
        />
      </div>
    </div>
  );
};

export default Sidebar;
