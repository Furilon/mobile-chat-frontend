import io from "socket.io-client";
import React from "react";
const SERVER_URL = "http://localhost:3000";

export const socket = io.connect(SERVER_URL);
export const SocketContext = React.createContext();
