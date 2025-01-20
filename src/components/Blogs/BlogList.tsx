import usePost from "../../hooks/usePost";
import { PostTypes } from "../../types/blogPost/post.type";
import { CourseItemSkeleton } from "../Common/BlogItemSkeleton";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const { data, isLoading } = usePost();
  const posts = data?.data?.posts;
  return (
    <section className="holder grid grid-cols-12 p-1">
      {isLoading ? (
        <div className="col-span-12">
          <CourseItemSkeleton />
          <CourseItemSkeleton />
          <CourseItemSkeleton />
          <CourseItemSkeleton />
        </div>
      ) : (
        posts.map((item: PostTypes) => <BlogCard posts={item} />)
      )}
    </section>
  );
};

export default BlogList;
