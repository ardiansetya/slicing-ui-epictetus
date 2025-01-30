import React from 'react'
import PostMetaTitle from './PostMetaTitle';
import PostAuthor from './PostAuthor';

const InfoPost = ({ category, date,title, description, authorAvatar, authorName,authorJob }) => {
  return (
    <>
     <PostMetaTitle category={category} date={date} title={title}/>
      <p className=" w-10/12 text-white/60 mt-6">
       {description}
      </p>
     <PostAuthor authorAvatar={authorAvatar} authorName={authorName} authorJob={authorJob} />
    </>
  );
};

export default InfoPost
