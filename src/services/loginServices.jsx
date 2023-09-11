import http from "./httpServices";

const loginUser = (data) => {
  return http.post("/user/login", data);
};

export default loginUser;
