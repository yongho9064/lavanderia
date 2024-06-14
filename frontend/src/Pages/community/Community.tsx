import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../../Typings/community/post";

const posts = [
  // Your posts data
  {
    id: 1,
    author: "그레이",
    content: "서울 한강 리버버스 재밌네요 👏",
    date: "2월 5일",
    link: "https://m.blog.naver.com/...",
    comments: [
      {
        id: 1,
        author: "user1",
        content: "저도 타보고 싶네요!"
      }
    ]
  },
  {
    id: 2,
    author: "goodmorning",
    content: "5분 일기 앱 만드는 중입니다!",
    date: "3일 전",
    link: "",
    comments: []
  },
  {
    id: 3,
    author: "blueSky",
    content: "오늘 날씨 정말 좋네요 ☀️",
    date: "1일 전",
    link: "",
    comments: [
      {
        id: 1,
        author: "user2",
        content: "정말요! 산책 나가야겠어요."
      },
      {
        id: 2,
        author: "user3",
        content: "저도 공원에 갈 계획이에요!"
      }
    ]
  },
  {
    id: 4,
    author: "techGuru",
    content: "새로운 React 기능을 소개합니다.",
    date: "2시간 전",
    link: "https://reactjs.org/",
    comments: []
  },
  {
    id: 5,
    author: "foodie123",
    content: "오늘은 맛있는 파스타를 먹었어요 🍝",
    date: "4시간 전",
    link: "",
    comments: [
      {
        id: 1,
        author: "user4",
        content: "저도 파스타 좋아해요!"
      }
    ]
  },
  {
    id: 6,
    author: "traveler",
    content: "다음 여행지는 어디로 갈까요? 🌍",
    date: "6시간 전",
    link: "",
    comments: [
      {
        id: 1,
        author: "user5",
        content: "저는 다음 달에 일본에 갈 예정이에요!"
      },
      {
        id: 2,
        author: "user6",
        content: "유럽 투어는 어떠세요?"
      }
    ]
  },
  {
    id: 7,
    author: "bookworm",
    content: "최근에 읽은 책을 추천합니다.",
    date: "1일 전",
    link: "",
    comments: []
  },
  {
    id: 8,
    author: "movieBuff",
    content: "새로 나온 영화가 정말 재미있었어요 🎬",
    date: "2일 전",
    link: "https://www.imdb.com/",
    comments: [
      {
        id: 1,
        author: "user7",
        content: "어떤 영화인가요?"
      }
    ]
  },
  {
    id: 9,
    author: "artist",
    content: "이번 주말에 전시회가 있어요.",
    date: "3일 전",
    link: "",
    comments: []
  },
  {
    id: 10,
    author: "musicLover",
    content: "최근에 들은 음악이 너무 좋아서 공유합니다 🎵",
    date: "5시간 전",
    link: "https://spotify.com/",
    comments: []
  }
];

const tabs = [
  { name: "전체", active: true },
  { name: "후기", active: false },
  { name: "패션", active: false },
  { name: "이벤트", active: false }
];

const Community = () => {
  const [activeTab, setActiveTab] = useState("전체");
  const navigate = useNavigate();

  const handlePostClick = (post : Post) => {
    navigate(`/community/${post.id}`, { state: { post } });
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
          <div key={post.id} className="bg-white p-4 rounded shadow-sm hover:bg-gray-100 cursor-pointer" onClick={() => handlePostClick(post)}>
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
        ))}
      </div>
    </div>
  );
};

export default Community;
