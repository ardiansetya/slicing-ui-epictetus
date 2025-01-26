import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import FeaturedPost from "@/components/FeaturedPost";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-800 min-h-screen">
    <div className="container text-white">
        <Navbar />
        <FeaturedPost />
    </div>
    </div>
  );
}
