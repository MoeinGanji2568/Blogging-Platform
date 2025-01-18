import http from "./httpService";

export async function getPosts() {
  return http.post(`/auth/sign-up`).then(({ data }) => data);
}
