import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/providers/ThemeProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SQL Editor",
  description: "Web based SQL editor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "h-screen bg-gray-200 dark:bg-[#141417] overflow-hidden"
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
