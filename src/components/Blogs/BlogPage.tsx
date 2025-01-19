import HeadingText from "../Common/HeadingText";
import BlogList from "./BlogList";

const BlogPage = () => {
  return (
    <div>
      <HeadingText extraClass="my-8 text-center">صفحه بلاگ ها</HeadingText>
      <BlogList />
    </div>
  );
};

export default BlogPage;
