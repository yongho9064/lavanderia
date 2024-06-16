export interface Comment {
  id: number;
  author: string;
  content: string;
  avatar: string
}


export interface Post {
  communityId: number;
  memberId: string;
  title: string;
  content: string;
  viewCount: number;
  image:string
  category: string;
  avatar: string
}
