import Button from "../ui/button";
import { Copy } from "lucide-react";
import { Eraser } from "lucide-react";
import { Play } from "lucide-react";

const EditorHeader = () => {
  return (
    <div className="flex justify-between pr-8">
      {/* left-side  */}
      <h2 className="flex items-center justify-center text-sm bg-gray-200 dark:bg-zinc-900 p-3 w-20">
        Input
      </h2>

      {/* right-side buttons  */}
      <div className="flex gap-4 text-sm">
        <Button
          text="Copy"
          customClass="bg-gray-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:bg-gray-200 hover:dark:bg-zinc-700"
          icon={<Copy size={12} />}
        />
        <Button
          text="Clear"
          customClass="bg-gray-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:bg-gray-200 hover:dark:bg-zinc-700"
          icon={<Eraser size={12} />}
        />

        <Button
          text="Run"
          customClass="bg-black dark:bg-white text-white dark:text-gray-800 border border-gray-100 hover:bg-zinc-700 hover:dark:bg-gray-300"
          icon={<Play size={12} />}
        />
      </div>
    </div>
  );
};

export default EditorHeader;
