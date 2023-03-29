export interface Post {
  title: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  date: Date;
  body: string;
}