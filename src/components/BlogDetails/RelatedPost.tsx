import { PostTypes } from "../../types/blogPost/post.type";
import notFoundImg from "../../../public/notFoundImg.webp";
import { Link } from "react-router-dom";

interface Props {
  post: PostTypes["related"];
}

const RelatedPost: React.FC<Props> = ({ post }) => {
  return (
    <div className="bg-secondary-0 col-span-3 rounded-md shadow-md p-2 h-fit">
      {post?.length > 0 ? (
        post?.map((item: PostTypes) => {
          return (
            <div className="flex gap-2 mb-2">
              <div className="relative aspect-video aspect-h-9 overflow-hidden rounded-lg mb-5 w-1/4">
                <img
                  className="w-full object-cover object-center hover:scale-110 transition-all ease-out duration-300"
                  src={item?.coverImageUrl || notFoundImg}
                />
              </div>
              <div>
                <p className="text-secondary-900 hover:text-red-400">
                  <Link to={`/blogs/${item?._id}`}>{item?.title}</Link>
                </p>
                <span className="text-sm text-secondary-500">
                  دسته بندی : {item?.category?.title}
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <p>پست مرتبطی وجود ندارد ...</p>
      )}
    </div>
  );
};

export default RelatedPost;
