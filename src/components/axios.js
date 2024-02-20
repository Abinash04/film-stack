import axios from "axios";

/* base url which will make a call to movie database*/
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
