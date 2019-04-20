export const loadAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const saveAuthToken = authToken => {
  try {
    console.log(authToken)
    localStorage.setItem("authToken", authToken);
  } catch (e) {}
};

export const clearAuthToken = () => {
  try {
    localStorage.removeItem("authToken");
  } catch (e) {}
};
