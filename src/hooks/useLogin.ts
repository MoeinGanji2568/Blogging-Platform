import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import http from "../core/services/httpService";
export interface User {
  _id: string;
  name: string;
  email: string;
  bookmarkedPosts: string[];
  likedPosts: string[];
  avatar: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface SignInResponse {
  statusCode: number;
  data: {
    message: string;
    user: User;
  };
}

export interface SignInData {
  email: string;
  password: string;
}

export const useLogin = () => {
  return useMutation<SignInResponse, Error, SignInData>({
    mutationKey: ["login"],
    mutationFn: async (credentials: SignInData) => {
      const { data } = await http.post<SignInResponse>(
        "/user/signin",
        credentials
      );
      return data;
    },
    onMutate: () => {
      toast.loading("در حال ورود به سایت...");
    },
    onSuccess: (response) => {
      const { user, message } = response.data;
      if (user) {
        toast.dismiss();
        toast.success(
          message || "ورود موفقیت‌آمیز بود، در حال انتقال به پنل کاربری..."
        );

        setTimeout(() => {
          window.location.pathname = "/panel/dashboard";
        }, 2000);
      } else {
        toast.dismiss();
        toast.error("خطا در دریافت اطلاعات کاربر!");
      }
    },
    onError: () => {
      toast.dismiss();
      toast.error("نام کاربری یا رمز عبور اشتباه است!");
    },
  });
};
