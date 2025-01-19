import { ClockIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { PostTypes } from "../../types/blogPost/post.type";
import CoverImage from "./CoverImage";
import Author from "./Author";
import BlogInteraction from "./BlogInteraction";

interface Props {
  posts: PostTypes;
}

const BlogCard: React.FC<Props> = ({ posts }) => {
  return (
    <div
      className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-4 border border-secondary-100
      p-2 rounded-lg
      "
    >
      {/*  blog iamge */}
      <CoverImage {...posts} />
      {/* blog content */}
      <div className="bg-secondary-100  p-2 rounded-lg flex flex-col w-full justify-between flex-1">
        <Link to={`/blogs/`}>
          <h2 className="mb-4 font-bold text-secondary-700">{posts.title}</h2>
        </Link>

        {/* blog author-category */}
        <div className="flex items-center  justify-between mb-4">
          <Author {...posts.author} />
          <div className="flex items-center text-[10px] text-secondary-500">
            <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
            <span className="ml-1"> خواندن:</span>
            <span className="ml-1 leading-3">{posts.readingTime}</span>
            <span>دقیقه</span>
          </div>
        </div>
        {/* blog interactioin */}
        <BlogInteraction {...posts} />
      </div>
    </div>
  );
};

export default BlogCard;
