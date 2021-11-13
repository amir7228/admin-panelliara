// ** Auth Endpoints
export default {
  loginEndpoint: "/auth/login/username",
  registerEndpoint: "/auth/register/",
  refreshEndpoint: "/auth/update-token/",
  logoutEndpoint: "/auth/logout/",

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: "Bearer",

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: "Bearer",
  storageRefreshTokenKeyName: "refreshToken",
};
