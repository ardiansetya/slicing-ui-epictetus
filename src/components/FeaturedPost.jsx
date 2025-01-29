import React from "react";
import InfoPost from "./InfoPost";

const FeaturedPost = () => {
  return (
    <article>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="lg:w-8/12 md:6/12 w-full">
          <img
            className="rounded-xl"
            src="/featured-thumbnail.png"
            alt="thumbnail"
          />
        </div>

        <div className="lg:w-4/12 md:w-6/12 w-full flex flex-col justify-center">
          <InfoPost
            category="UI Design"
            date="July, 2 2021"
            title="Understanding color theory: The Color wheel and finding complementary
        colors"
            description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo possimus
        laudantium, expedita reprehenderit quidem accusamus esse. Rerum
        asperiores laborum earum?"
            authorAvatar={"/author-1.png"}
            authorName={"Leslie Alexander"}
            authorJob={"UI Designer"}
          />
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;
