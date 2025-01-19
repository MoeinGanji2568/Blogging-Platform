import { AuthorType } from "../../types/blogPost/post.type";
import Avatar from "../ui/Avatar";

const Author: React.FC<Pick<AuthorType, "avatarUrl" | "name">> = ({
  avatarUrl,
  name,
}) => {
  return (
    <div className="flex items-center gap-x-1">
      <Avatar src={avatarUrl} />
      <span className="text-sm text-secondary-500">{name}</span>
    </div>
  );
};
export default Author;
