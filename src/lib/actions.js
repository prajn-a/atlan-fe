import { toast } from "sonner";
import Papa from "papaparse";

export const Copy = async (input) => {
  if (!input) {
    return toast.error("Please enter a query");
  }
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

export const Clear = async (setQuery, input) => {
  if (!input) {
    return toast.error("Editor already clear");
  }
  try {
    await setQuery("");
    toast.success("Editor cleared successfully");
  } catch (err) {
    console.log("Unable to clear editor", err);
    toast.error("Editor clearing failed");
  }
};

const exportData = (data, fileName, type) => {
  // Create a link and download the file
  const blob = new Blob([data], { type });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
};

export const exportAsCSV = (data) => {
  if (data.length < 1) {
    return toast.error("Please execute the query");
  }
  try {
    const csvData = Papa.unparse(data);
    exportData(csvData, "data.csv", "text/csv;charset=utf-8;");

    toast.success("Exporting as CSV");
  } catch (err) {
    console.log("unable to export as csv", err);
    toast.error("Exporting as CSV failed");
  }
};

export const exportAsJSON = (data) => {
  if (data.length < 1) {
    return toast.error("Please execute the query");
  }
  try {
    const jsonData = JSON.stringify(data);
    exportData(jsonData, "data.json", "application/json");

    toast.success("Exporting as JSON");
  } catch (err) {
    console.log("unable to export as json", err);
    toast.error("Exporting as JSON failed");
  }
};
