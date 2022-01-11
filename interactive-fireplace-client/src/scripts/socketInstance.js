import { io } from "socket.io-client";

const socket = io("ws://192.168.1.23:5050");


export default socket;