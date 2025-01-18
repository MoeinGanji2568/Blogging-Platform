import http from "./httpService";

export async function getPosts() {
  return http.post(`/post/list`).then(({ data }) => data);
}

const postApi = { getPosts };
export default postApi;
