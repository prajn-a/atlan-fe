import Link from "next/link";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { Database } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full py-2 border-b border-gray-400 dark:border-zinc-800">
      <div className="flex items-center justify-between mx-auto px-10">
        {/* logo  */}
        <Link href="/" className="flex items-center gap-2">
          <Database size={17} />
          <p className="font-semibold">sqlEditor</p>
        </Link>

        {/* theme toggle  */}
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
