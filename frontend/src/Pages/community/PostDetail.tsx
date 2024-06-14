import React from 'react';
import { useLocation } from 'react-router-dom';
import { Post } from "../../Typings/community/post";

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
            <div className="font-bold">{post.author}</div>
            <div className="text-gray-500 text-sm">{post.date}</div>
          </div>
        </div>
        <div className="mb-2">{post.content}</div>
        {post.link && (
          <a href={post.link} className="text-blue-500">
            링크로 이동
          </a>
        )}
        <div className="mt-2">
          <div className="flex items-center space-x-2">
            <button className="text-gray-600">👍 10</button>
            <button className="text-gray-600">💬 {post.comments.length}</button>
            <button className="text-gray-600">➕</button>
          </div>
          {post.comments.map(comment => (
            <div key={comment.id} className="mt-2 pl-10">
              <div className="flex items-center">
                <div className="bg-gray-200 w-8 h-8 rounded-full"></div>
                <div className="ml-2">
                  <div className="font-bold">{comment.author}</div>
                  <div className="text-gray-500">{comment.content}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
