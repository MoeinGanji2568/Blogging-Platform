import http from "./httpService";

export async function getPosts() {
  return http.get(`/post/list`).then(({ data }) => data);
}

const postApi = { getPosts };
export default postApi;
