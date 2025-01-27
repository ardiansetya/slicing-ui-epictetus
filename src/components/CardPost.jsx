import React from 'react'
import InfoPost from './InfoPost';

const CardPost = ({ thumbnail, ...infoPost }) => {
  return (
    <article>
      <img src={thumbnail} alt="" />
      <div className='mt-3'>

      <InfoPost {...infoPost} />
      </div>
    </article>
  );
};

export default CardPost
