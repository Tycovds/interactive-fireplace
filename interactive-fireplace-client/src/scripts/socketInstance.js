import { io } from "socket.io-client";



const socket = io(`ws://${window.location.hostname}:5050`);


export default socket;