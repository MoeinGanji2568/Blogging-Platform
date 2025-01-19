import usePost from "../../hooks/usePost";
import { PostTypes } from "../../types/blogPost/post.type";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const { data, isLoading } = usePost();
  const posts = data?.data?.posts;
  return (
    <section className="holder grid grid-cols-12 p-1">
      {isLoading ? (
        <p>loading...</p>
      ) : (
        posts.map((item: PostTypes) => <BlogCard posts={item} />)
      )}
    </section>
  );
};

export default BlogList;
