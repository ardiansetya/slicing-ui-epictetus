import React from "react";
import Layout from "@/components/Layout";
import PostMetaTitle from "@/components/PostMetaTitle";
import PostAuthor from "@/components/PostAuthor";

const Detail = () => {
  return (
    <Layout>
      <div className="md:w-6/12 w-full mx-auto flex flex-col items-center">
        <PostMetaTitle
          className={"text-center"}
          category={"UI Design"}
          date={"July, 2 2021"}
          title={
            "Understanding color theory: The Color wheel and finding complementary colors"
          }
        />
        <PostAuthor
          authorAvatar={"/author-1.png"}
          authorName={"Leslie Alexander"}
          authorJob={"UI Designer"}
        />
      </div>
      <div className="py-10 md:w-10/12 w-full mx-auto">
        <img className="rounded-xl" src="/detail-image.png" alt="detail" />
      </div>
      <div className="md:w-7/12 w-full mx-auto leading-relaxed">
        <p className="text-xl mb-4">
          Male sixth sea it a. Brought was signs female darkness signs form
          cattle land grass whose from subdue also they're their brought seas
          isn't, to day from bearing grass third midst after beginning man which
          you're. Dry, gathering beginning given made them evening.
        </p>
        <p className="text-xl mb-4">
          Lights dry. Thing. Likeness, forth shall replenish upon abundantly our
          green. Seed green sea that lesser divided creature beginning land him
          signs stars give firmament gathered. Wherein there their morning a he
          grass. Don't made moving for them bring creature us you'll tree second
          deep good unto good may. Us yielding.Have.
        </p>
        <p className="text-xl mb-4">
          Man upon set multiply moved from under seasons abundantly earth
          brought a. They're open moved years saw isn't morning darkness. Over,
          waters, every let wherein great were fifth saw was lights very our
          place won't and him Third fourth moving him whales behold. Beast
          second stars lights great was don't green give subdue his. Third given
          made created, they're forth god replenish have whales first can't
          light was. Herb you'll them beast kind divided. Were beginning fly air
          multiply god Yielding sea don't were forth.
        </p>
      </div>
    </Layout>
  );
};

export default Detail;
