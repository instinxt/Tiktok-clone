import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-tiktok-build.herokuapp.com/",
});

export default instance;
