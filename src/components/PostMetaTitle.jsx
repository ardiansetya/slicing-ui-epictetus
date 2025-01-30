import React from 'react'

const PostMetaTitle = ({ category, date, title, className }) => {
  return (
    <>
      <div className="flex items-center text-white/60 gap-4">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div className="">{date}</div>
      </div>
      <h3 className= {`text-2xl mt-4 text-cente ${className}`}>{title}</h3>
    </>
  );
};

export default PostMetaTitle
