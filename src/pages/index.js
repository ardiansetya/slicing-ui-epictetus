import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import FeaturedPost from "@/components/FeaturedPost";
import CardPost from "@/components/CardPost";
import { useState } from "react";
import Layout from "@/components/Layout";
import mockPost from "@/utils/post.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [posts, setPost] = useState(mockPost);


  return (
    <Layout >
        <FeaturedPost />
        <div className="flex flex-wrap items-center  -mx-4 mt-8">
          {posts.map((post) => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
    </Layout>
  );
}
