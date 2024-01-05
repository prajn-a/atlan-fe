import Editor from "@/components/editor";
import Header from "@/components/navigation/header";
import Schema from "@/components/schema";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="h-screen">
      <Header />

      {/* layout  */}
      <section className="flex">
        {/* sidebar  */}
        <Sidebar />

        {/* editor  */}
        <Editor />

        {/* schema  */}
        <Schema />
      </section>
    </main>
  );
}
