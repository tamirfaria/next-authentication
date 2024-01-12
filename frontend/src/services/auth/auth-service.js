import { httpClient } from "../../infra/client/http-client";
import { tokenService } from "../token/token-service";

export const authService = {
  async login({ username, password }) {
    return httpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: "POST",
      body: { username, password },
    }).then(async (response) => {
      if (!response.ok) throw new Error("Username or password invalid");
      const body = response.body;
      const accessToken = body.data.access_token;
      tokenService.save(accessToken);
    });
  },
};
