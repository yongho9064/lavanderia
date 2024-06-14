export interface Comment {
  id: number;
  author: string;
  content: string;
}

export interface Post {
  id: number;
  author: string;
  content: string;
  date: string;
  link?: string;
  comments: Comment[];
}
