import React from "react";
import FeedCard from "./FeedCard";
import usePosts from "@/hooks/usePosts";

const Feeds = () => {
  const { posts = [] } = usePosts();
  console.log(posts);
  
  return (
    <div>
      {posts.map(({ id, content, imageId, imageUrl, author }) => (
        <FeedCard
          key={id}
          id={id}
          content={content}
          imageId={imageId}
          imageUrl={imageUrl}
          author={author}
        />
      ))}
    </div>
  );
};

export default Feeds;
