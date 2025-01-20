import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../core/services/postService";

const useBlogDetails = (blogId: string) => {
  return useQuery({
    queryKey: ["BlogDetails", blogId],
    queryFn: async () => await getPostById(blogId),
  });
};

export { useBlogDetails };
