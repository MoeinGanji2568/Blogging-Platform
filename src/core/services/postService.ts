import http from "./httpService";

export async function getPosts() {
  return http.get(`/post/list`).then(({ data }) => data);
}
export async function getPostById(id: string) {
  return http.get(`/post/${id}`).then(({ data }) => data);
}

const postApi = { getPosts, getPostById };
export default postApi;
