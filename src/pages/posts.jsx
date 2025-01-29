import Layout from "@/components/Layout";
import React, { useState } from "react";
import mockPost from "@/utils/post.json";
import CardPost from "@/components/CardPost";
import SectionHeader from "@/components/SectionHeader";

const posts = () => {
  const [posts, setPost] = useState(mockPost);
  return (
    <Layout>
      <SectionHeader>UI Design</SectionHeader>

      {!posts.lenght? (
        
          <div className="flex flex-wrap items-center -mx-4 mt-8">
            {posts.map((post) => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        
      ) : (
        <div className="text-center py-20">
          <h1 className="sm:text-6xl text-4xl">No Result 😢</h1>
          <p className="sm:text-xl text-lg text-white/60 mt-4 w-full md:w-6/12 mx-auto">
            We couldn't find any post with the keyword 'asdasdasd'. Please try
            another keyword
          </p>
        </div>
      )}
    </Layout>
  );
};

export default posts;
