import React from "react";
import InfoPost from "./InfoPost";

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
