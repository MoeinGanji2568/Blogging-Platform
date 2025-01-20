import { Link } from "react-router-dom";
import { PostTypes } from "../../types/blogPost/post.type";
import notFoundImg from "../../../public/notFoundImg.webp";

const CoverImage: React.FC<Pick<PostTypes, "_id" | "coverImageUrl">> = ({
  _id,
  coverImageUrl,
}) => {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
      <Link to={`/blogs/${_id}`}>
        <img
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300 "
          src={coverImageUrl || notFoundImg}
        />
      </Link>
    </div>
  );
};
export default CoverImage;
