import React from "react";

const FeaturedPost = () => {
  return (
    <article>
      <div className="flex gap-8">
        <div className="w-8/12 ">
          <img
            className="rounded-xl"
            src="/featured-thumbnail.png"
            alt="thumbnail"
          />
        </div>

        <div className="w-4/12 flex flex-col justify-center">
          <div className="flex items-center text-white/60 gap-4">
            <div className="uppercase">UI Design</div>
            <span>&bull;</span>
            <div className="">July, 2 2021</div>
          </div>
          <h3 className=" text-2xl mt-4">
            Understanding color theory: The Color wheel and finding
            complementary colors
          </h3>
          <p className=" w-10/12 text-white/60 mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            possimus laudantium, expedita reprehenderit quidem accusamus esse.
            Rerum asperiores laborum earum?
          </p>
          <div className="flex items-center mt-6">
            <img
              src="/author-1.png"
              alt="author"
              className="w-14 h-14 rounded-full object-cover "
            />
            <div className="ml-4">
              <p>Leslie Alexander</p>
              <p className="text-white/60 text-sm">UI Designer</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;
