import * as process from "process";
import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  timeout: 5000
});