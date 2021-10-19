import axios from "axios";

// Get user code(string)
// Retrieve github access_token
// retrieve user info from github
// Check if user exists on DB, y -> create toke, n -> add user
// Return token with user information

interface IAccessTokenResponse {
  access_token: string;
}

class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token";

    const { data: accessTokenResponse } =
      await axios.post<IAccessTokenResponse>(url, null, {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: "application/json",
        },
      });

    return accessTokenResponse;
  }
}

export { AuthenticateUserService };
