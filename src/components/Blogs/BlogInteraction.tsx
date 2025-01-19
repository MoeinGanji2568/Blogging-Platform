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

const BlogInteraction: React.FC<Partial<PostTypes>> = ({
  commentsCount,
  likesCount,
  isLiked,
  isBookmarked,
}) => {
  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{toPersianDigits(commentsCount || 0)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red">
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
