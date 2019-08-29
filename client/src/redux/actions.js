import * as type from "./type";

export const getUserInfo = user => {
  console.log(user);
  return {
    type: type.GET_USER_INFO,
    payload: user
  };
};
