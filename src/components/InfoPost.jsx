import React from 'react'

const InfoPost = ({ category, date,title, description, authorAvatar, authorName,authorJob }) => {
  return (
    <>
      <div className="flex items-center text-white/60 gap-4">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div className="">{date}</div>
      </div>
      <h3 className=" text-2xl mt-4">
        {title}
      </h3>
      <p className=" w-10/12 text-white/60 mt-6">
       {description}
      </p>
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
};

export default InfoPost
