import decode from "jwt-decode";

export default class Auth {
  loggedIn = () => {
  // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // Getting token from localstorage
    return !!token.token && !this.isTokenExpired(token.token); // handwaiving here
  };

  isTokenExpired = token => {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired.
        return true;
      } else return false;
    } catch (err) {
      console.log("expired check failed! Line 42: AuthService.js");
      return false;
    }
  };

  setToken = (token, userId) => {
    // Saves user token to localStorage
    localStorage.setItem("auth", token);
    localStorage.setItem("userId", userId);
  };

  getToken = () => {
    // Retrieves the user token from localStorage
    let token = localStorage.getItem("auth");
    let userId = localStorage.getItem("userId")
    return {token, userId};
  };

  logout = () => {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("auth");
    localStorage.removeItem("userId");
  };

  getConfirm = () => {
    // Using jwt-decode npm package to decode the token
    let answer = decode(this.getToken());
    console.log("Recieved answer!");
    return answer;
  };

}
