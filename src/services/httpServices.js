import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000"

export const http = {
  Get: axios.get,
  Put: axios.put,
  Post: axios.post,
  Delete: axios.delete,
}