import { toast } from "sonner";

export const Copy = async (input) => {
  try {
    await navigator.clipboard.writeText(input);
    // alert("Copied to clipboard");
    toast.success("Query copied successfully");
  } catch (err) {
    console.log("Unable to copy to clipboard", err);
    // alert("Copy to clipboard failed");
    toast.error("Query copy failed");
  }
};

export const Clear = async (setQuery) => {
  try {
    await setQuery("");
    toast.success("Editor cleared successfully");
  } catch (err) {
    console.log("Unable to clear editor", err);
    toast.error("Editor clearing failed");
  }
};
