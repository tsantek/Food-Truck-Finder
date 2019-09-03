export default function reducer(state, { type, payload }) {
  switch (type) {
    case "GET_USER_INFO":
      return {
        payload
      };
    default:
      return state;
  }
}
