import http from "./httpService";

export async function signUpApi(data: {
  email: string;
  password: string;
  name: string;
}) {
  return http.post(`/user/signup`, data).then(({ data }) => data);
}
export async function signInApi(data: { email: string; password: string }) {
  return http.post(`/user/signin`, data).then(({ data }) => data);
}

export async function verifyApi() {
  return http.get(`/user/profile`).then(({ data }) => data);
}

export function logoutApi() {
  return http.post(`/user/logout`);
}
