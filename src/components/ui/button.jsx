import { cn } from "@/lib/utils";

const Button = ({ text, icon, action, customClass }) => {
  return (
    <button
      className={cn(
        customClass,
        "flex items-center gap-1.5 px-3 py-1.5 my-2 drop-shadow-sm rounded text-xs transition-all duration-300 ease-out"
      )}
      onClick={action}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
