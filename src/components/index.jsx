"use client";

import { useState } from "react";
import { Toaster, toast } from "sonner";

import Editor from "@/components/editor";
import Header from "@/components/navigation/header";
import Schema from "@/components/schema";
import Sidebar from "@/components/sidebar";

// data import
import { Customer, Product, Category, Shipper, Default } from "@/data/data";

export default function SqlEditor() {
  const [query, setQuery] = useState("Select * From Customer ;");
  const [output, setOutput] = useState([]);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleQueryRun = () => {
    if (!query) {
      toast.error("Please enter a query!");
    } else {
      setLoading(true);

      // maping data based on query
      let data;
      switch (query.toLowerCase()) {
        case "select * from customer ;":
          data = Customer;
          break;
        case "select * from product ;":
          data = Product;
          break;
        case "select * from category ;":
          data = Category;
          break;
        case "select * from shipper ;":
          data = Shipper;
          break;
        default:
          data = Default;
      }

      setOutput(data);
      setLoading(false);
      setHistory([...history, query]);
    }
  };

  return (
    <main className="h-screen overflow-hidden">
      <Toaster position="top-right" richColors />

      <Header />

      {/* layout  */}
      <div className="flex">
        {/* sidebar  */}
        <Sidebar
          setQuery={setQuery}
          history={history}
          setHistory={setHistory}
        />

        {/* editor  */}
        <Editor
          handleQueryRun={handleQueryRun}
          query={query}
          setQuery={setQuery}
          output={output}
          loading={loading}
        />

        {/* schema  */}
        <Schema />
      </div>
    </main>
  );
}
