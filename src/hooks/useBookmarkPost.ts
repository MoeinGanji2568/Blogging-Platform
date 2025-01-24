import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../core/services/httpService";
import toast from "react-hot-toast";

const useBookmarkPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["postFavorite"],
    mutationFn: async (postId: string) =>
      await http.post(`/post/bookmark/${postId}`).then((res) => res.data),
    onMutate: () => toast.loading("در حال بوکمارک خبر ..."),
    onSuccess: (data) => {
      toast.dismiss();
      toast.success(data?.data?.message);
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در بوکمارک خبر به وجود آمد !");
    },
  });
};

export { useBookmarkPost };
