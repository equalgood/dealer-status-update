import { actions } from "../store";

export function createSocketConnection() {
  let socket = new WebSocket(
    "wss://dealer-status-reporter-devprem.leverex.io/websocket"
  );
  socket.onopen = function (e) {
    console.log("connected");
  };
  return function (dispatch) {
    socket.onmessage = function (event) {
      const { data } = JSON.parse(event.data);
      dispatch({ type: actions.GET_RESPONSE, payload: data });
    };
  };
}
