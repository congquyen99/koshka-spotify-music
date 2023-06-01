
import Sidebar from "@/components/sidebar/Sidebar";
import "./globals.css";
import { Figtree } from "next/font/google";

const fontFamily = Figtree({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Welcome to Koshka Spotify",
  description: "Listen to music from your favorite artists",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontFamily.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
