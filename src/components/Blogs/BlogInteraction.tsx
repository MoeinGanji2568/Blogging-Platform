import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as SolidHearIcon,
  BookmarkIcon as SolideBookmarkIcon,
} from "@heroicons/react/24/solid";
import { toPersianDigits } from "../../utils/toPersianNumber";
import ButtonIcon from "../ui/ButtonIcon";
import { PostTypes } from "../../types/blogPost/post.type";
import { useLikePost } from "../../hooks/useLikePost";
import { useAuth } from "../../contexts/auth/auth.provider";
import toast from "react-hot-toast";

const BlogInteraction: React.FC<Partial<PostTypes>> = ({
  commentsCount,
  likesCount,
  isLiked,
  isBookmarked,
  _id,
}) => {
  const { isAuthenticated } = useAuth();
  const likePost = useLikePost();

  const handleLikePost = (postId: string) => {
    if (isAuthenticated)
      try {
        likePost.mutate(postId);
      } catch (error) {
        console.log(error);
      }
    else toast.error("لطفا ابتدا ورود کنید ...");
  };

  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{toPersianDigits(commentsCount || 0)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red" onClick={() => handleLikePost(_id!)}>
        {isLiked ? <SolidHearIcon /> : <HeartIcon />}
        <span>{toPersianDigits(likesCount || 0)}</span>
      </ButtonIcon>
      <ButtonIcon variant="primary">
        {isBookmarked ? <SolideBookmarkIcon /> : <BookmarkIcon />}
      </ButtonIcon>
    </div>
  );
};

export default BlogInteraction;
