import { Link } from "react-router-dom";
import { PostTypes } from "../../types/blogPost/post.type";

const CoverImage: React.FC<Pick<PostTypes, "slug" | "coverImageUrl">> = ({
  slug,
  coverImageUrl,
}) => {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
      <Link to={`/blogs/${slug}`}>
        <img
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300 "
          src={coverImageUrl}
        />
      </Link>
    </div>
  );
};
export default CoverImage;
