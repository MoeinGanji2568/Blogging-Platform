import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../core/services/postService";

const usePost = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: getPosts,
  });
};

export default usePost;
