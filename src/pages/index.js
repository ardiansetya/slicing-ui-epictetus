import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import FeaturedPost from "@/components/FeaturedPost";
import CardPost from "@/components/CardPost";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [posts, setPost] = useState([
    {
      id: 1,
      thumbnail: "/thumbnail-2.png",
      category: "Internet",
      date: "June, 28 2021",
      title: "How to design a product that can grow itself 10x in year",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus laudantium, expedita reprehenderit quidem accusamus esse. Rerum asperiores laborum earum?",
      authorAvatar: "/author-1.png",
      authorName: "Jenny Wilson",
      authorJob: "Product Designer",
    },
    {
      id: 2,
      thumbnail: "/thumbnail-3.png",
      category: "Internet",
      date: "June, 28 2021",
      title: "How to design a product that can grow itself 10x in year",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus laudantium, expedita reprehenderit quidem accusamus esse. Rerum asperiores laborum earum?",
      authorAvatar: "/author-2.png",
      authorName: "Jenny Wilson",
      authorJob: "Product Designer",
    },
    {
      id: 3,
      thumbnail: "/thumbnail-4.png",
      category: "Internet",
      date: "June, 28 2021",
      title: "How to design a product that can grow itself 10x in year",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus laudantium, expedita reprehenderit quidem accusamus esse. Rerum asperiores laborum earum?",
      authorAvatar: "/author-3.png",
      authorName: "Jenny Wilson",
      authorJob: "Product Designer",
    },
    {
      id: 3,
      thumbnail: "/thumbnail-5.png",
      category: "Internet",
      date: "June, 28 2021",
      title: "How to design a product that can grow itself 10x in year",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus laudantium, expedita reprehenderit quidem accusamus esse. Rerum asperiores laborum earum?",
      authorAvatar: "/author-2.png",
      authorName: "Jenny Wilson",
      authorJob: "Product Designer",
    },
    {
      id: 3,
      thumbnail: "/thumbnail-6.png",
      category: "Internet",
      date: "June, 28 2021",
      title: "How to design a product that can grow itself 10x in year",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus laudantium, expedita reprehenderit quidem accusamus esse. Rerum asperiores laborum earum?",
      authorAvatar: "/author-1.png",
      authorName: "Jenny Wilson",
      authorJob: "Product Designer",
    },
    {
      id: 3,
      thumbnail: "/thumbnail-7.png",
      category: "Internet",
      date: "June, 28 2021",
      title: "How to design a product that can grow itself 10x in year",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus laudantium, expedita reprehenderit quidem accusamus esse. Rerum asperiores laborum earum?",
      authorAvatar: "/author-4.png",
      authorName: "Jenny Wilson",
      authorJob: "Product Designer",
    },
  ]);


  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-800 min-h-screen">
      <div className="container text-white">
        <Navbar />
        <FeaturedPost />
        <div className="flex flex-wrap items-center  -mx-4 mt-8">
          {posts.map((post) => (
            <div key={post.id} className="w-4/12 px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
