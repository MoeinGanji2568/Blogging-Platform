import { useParams } from "react-router-dom";
import { useBlogDetails } from "../../hooks/useBlogDetails";
import HeadingText from "../Common/HeadingText";
import LeftDetailSection from "./LeftDetailSection";
import RelatedPost from "./RelatedPost";

const BlogDetailsPage = () => {
  const { id: blogId } = useParams<string>();
  const { data } = useBlogDetails(blogId!);
  const post = data?.data?.post;

  return (
    <div>
      <HeadingText extraClass="text-center my-8">جزییات بلاگ</HeadingText>
      <section className="holder  md:grid md:grid-cols-10 gap-4">
        <LeftDetailSection post={post} />
        <RelatedPost post={post?.related} />
      </section>
    </div>
  );
};

export default BlogDetailsPage;
