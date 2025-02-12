export interface UserTypes {
  _id: string;
  email: string;
  name: string;
  avatar: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  bookmarkedPosts: Array<string>;
  likedPosts: Array<string>;
}
