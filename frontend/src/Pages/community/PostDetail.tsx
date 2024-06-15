import React from 'react';
import { useLocation } from 'react-router-dom';
import { Post } from '../../Typings/community/post';

const PostDetail: React.FC = () => {
  const location = useLocation();
  const post: Post = location.state.post;

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto h-full px-4">
      <div className="bg-white p-4 rounded shadow-sm">
        <div className="flex items-center mb-2">
          <div className="bg-gray-200 w-10 h-10 rounded-full"></div>
          <div className="ml-3">
            <div className="font-bold">{post.memberId}</div>
            <div className="text-gray-500 text-sm">{post.category}</div>
          </div>
        </div>
        <div className="mb-2 font-bold">{post.title}</div>
        <div className="mb-2">{post.content}</div>
        <div className="text-gray-500 text-sm">조회수: {post.viewCount}</div>
      </div>
    </div>
  );
};

export default PostDetail;
