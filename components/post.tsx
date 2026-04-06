import React from "react";

interface PhotoPostProps {
    post: {
        image: string,
        user: string,
        caption: string,
    }
}

const PhotoPost = ({ post }: PhotoPostProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      
      <img src={post.image} alt="" className="w-full h-64 object-cover" />

      <div className="p-4">
        <h4 className="font-semibold">{post.user}</h4>
        <p className="text-sm text-gray-600 mt-1">{post.caption}</p>
      </div>
    </div>
  );
};

export default PhotoPost;