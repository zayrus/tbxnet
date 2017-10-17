import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:10010",
  headers: {
    "Content-Type": "application/json"
  }
})
