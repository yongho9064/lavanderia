export interface Comment {
  id: number;
  author: string;
  content: string;
}


export interface Post {
  communityId: number;
  memberId: string;
  title: string;
  content: string;
  viewCount: number;
  category: string;
}
