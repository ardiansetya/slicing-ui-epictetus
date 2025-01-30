import React from 'react'

const PostAuthor = ({authorAvatar, authorName, authorJob}) => {
  return (
    <>
      <div className="flex items-center mt-6">
        <img
          src={authorAvatar}
          alt="author"
          className="w-14 h-14 rounded-full object-cover "
        />
        <div className="ml-4">
          <p>{authorName}</p>
          <p className="text-white/60 text-sm">{authorJob}</p>
        </div>
      </div>
    </>
  );
}

export default PostAuthor
