import http from "./httpServices";

const signUpUser = (data) => {
  return http.post("/user/register", data);
};

export default signUpUser;
