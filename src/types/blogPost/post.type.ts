export interface CategoryType {
  _id: string;
  title: string;
  slug: string;
}

export interface AuthorType {
  _id: string;
  name: string;
  avatar: string | null;
  avatarUrl: string | null;
}

export interface CommentType {
  _id: string;
  user: AuthorType;
  content: {
    text: string;
  };
  status: number;
  openToComment: boolean;
  createdAt: string;
  answers: CommentType[];
}

export interface PostTypes {
  _id: string;
  id: string;
  title: string;
  slug: string;
  category: CategoryType;
  type: "free" | "paid";
  briefText: string;
  text: string;
  coverImage: string;
  coverImageUrl: string;
  readingTime: number;
  tags: string[];
  author: AuthorType;
  related: PostTypes[];
  createdAt: string;
  updatedAt: string;
  likesCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  comments: CommentType[];
  commentsCount: number;
}
