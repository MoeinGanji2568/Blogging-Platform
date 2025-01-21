import { PostTypes } from "../../types/blogPost/post.type";
import Author from "../Blogs/Author";
import BlogInteraction from "../Blogs/BlogInteraction";
import HeadingText from "../Common/HeadingText";
import Avatar from "../ui/Avatar";
import notFoundImg from "../../../public/notFoundImg.webp";
import { toLocalDateShort } from "../../utils/dateFormatter";
import { toPersianDigits } from "../../utils/toPersianNumber";
import { CalendarDateRangeIcon, ClockIcon } from "@heroicons/react/24/outline";
import ButtonIcon from "../ui/ButtonIcon";

interface Props {
  post: PostTypes | undefined;
}

const LeftDetailSection: React.FC<Props> = ({ post }) => {
  return (
    <div className="col-span-7">
      <div className="flex flex-col shadow-md items-center gap-3 mb-4 bg-secondary-0 rounded-md p-3">
        <Avatar src={post?.author.avatarUrl!} width={84} height={75} />
        <h2>{post?.author.name}</h2>
      </div>
      <div className="mb-3">
        <div className="relative aspect-video aspect-h-9 overflow-hidden rounded-lg mb-5 w-full">
          <img
            className="w-full object-cover object-center hover:scale-110 transition-all ease-out duration-300"
            src={post?.coverImageUrl || notFoundImg}
          />
        </div>

        <div className="flex items-center gap-3 px-1">
          <span className="text-secondary-700">توسط : </span>
          <Author name={post?.author.name} avatarUrl={post?.author.avatarUrl} />
        </div>
        <HeadingText extraClass="my-4 text-2xl">{post?.title}</HeadingText>
        <p className="text-secondary-700">{post?.text}</p>
        <div className="flex justify-between my-3 ">
          <div className="flex items-center gap-x-3 text-secondary-500">
            <ButtonIcon variant="">
              <ClockIcon />
              {toPersianDigits(post?.readingTime || 0)}
            </ButtonIcon>
            <ButtonIcon variant="">
              <CalendarDateRangeIcon />
              {toLocalDateShort(post?.createdAt ?? "2020")}
            </ButtonIcon>
          </div>
          <BlogInteraction {...post} />
        </div>
      </div>
    </div>
  );
};

export default LeftDetailSection;
