import { Link } from "react-router-dom";

interface Props {
  slug: string;
  coverImageUrl: string;
}
export default function CoverImage({ slug, coverImageUrl }: Props) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
      <Link to={`/blogs/${slug}`}>
        <img
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          src={coverImageUrl}
        />
      </Link>
    </div>
  );
}
