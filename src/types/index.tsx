export type Post = {
  title: string;
  id: number;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};

export type User = {
  firstName: string;
  lastName: string;
  image: string;
};

export type Comment = {
  id: number;
  body: string;
  postId: number;
  username: string;
};

export type CommentResponse = {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
};

export type ProductCardProps = {
  imgUrl: string;
  tag: string;
  title: string;
  time: string;
  rating: string;
};

export type Recipe = {
  name: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  tags: string[];
  image: string;
  rating: number
};