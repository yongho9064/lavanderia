import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Post } from '../../Typings/community/post'



const tabs = [
  { name: "전체", active: true },
  { name: "후기", active: false },
  { name: "패션", active: false },
  { name: "이벤트", active: false }
];

const Community = () => {
  const [activeTab, setActiveTab] = useState("전체");
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const access = localStorage.getItem("access");
        const response = await axios.get("/community/", {
          headers: {
            access: access,
          },
        });

        console.log(response.data)
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (post: Post) => {
    navigate(`/community/${post.communityId}`, { state: { post } });
  };

  return (
    <div className="max-w-2xl mx-auto h-full px-4">
      {/* Header */}
      <header className="mb-4 sticky top-[116px] bg-white">
        <div className="flex gap-4 p-3">
          {tabs.map(tab => (
            <button
              key={tab.name}
              className={`px-4 py-2 rounded-full ${activeTab === tab.name ? "bg-black text-white" : "bg-gray-200 text-gray-600"}`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </header>
      {/* Posts */}
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.communityId} className="bg-white p-4 rounded shadow-sm hover:bg-gray-100 cursor-pointer" onClick={() => handlePostClick(post)}>
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
        ))}
      </div>
    </div>
  );
};

export default Community;
