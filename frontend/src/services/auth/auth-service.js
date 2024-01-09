import { httpClient } from "../../infra/client/http-client";
export const authService = {
  async login({ username, password }) {
    return httpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: "POST",
      body: { username, password },
    }).then(async (response) => {
      if (!response.ok) throw new Error("Username or password invalid");
      console.log(response.body);
    });
  },
};
