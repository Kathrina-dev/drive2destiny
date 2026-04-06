import React from "react";

interface PhotoPostProps {
    post: {
        image: string,
        user: string,
        caption: string,
    }
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const PhotoPost = ({ post }: PhotoPostProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      
      <img src={post.image} alt="" className="w-full h-64 object-cover" />

      <div className="p-4">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
            {getInitials(post.user)}
          </div>
          <span className="font-semibold text-slate-800 text-sm">{post.user}</span>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-4">
          {post.caption}
        </p>
      </div>
    </div>
  );
};

export default PhotoPost;