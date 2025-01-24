import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../core/services/httpService";
import toast from "react-hot-toast";

const useLikePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["postLike"],
    mutationFn: async (postId: string) =>
      await http.post(`/post/like/${postId}`).then((res) => res.data),
    onMutate: () => toast.loading("در حال لایک خبر ..."),
    onSuccess: (data) => {
      toast.dismiss();
      toast.success(data?.data?.message);
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در لایک خبر به وجود آمد !");
    },
  });
};

export { useLikePost };
