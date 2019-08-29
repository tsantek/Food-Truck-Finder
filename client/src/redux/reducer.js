import * as type from "./type";

export default function reducer(state, { type, payload }) {
  switch (type) {
    case "GET_USER_INFO":
      console.log(payload);
      return {
        payload
      };
    default:
      return state;
  }
}
