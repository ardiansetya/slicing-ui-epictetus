import Layout from '@/components/Layout'
import React, { useState } from 'react'
import mockPost from '@/utils/post.json'
import CardPost from '@/components/CardPost'

const posts = () => {
  const [posts, setPost] = useState(mockPost)
  return (
    <Layout>
      <div className="flex flex-wrap items-center -mx-4 mt-8">
        {posts.map((post) => (
          <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
            <CardPost {...post} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default posts
