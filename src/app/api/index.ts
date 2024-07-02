import * as process from "process";
import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});

export const TgInstance = axios.create({
  baseURL: process.env.REACT_BOT_HOST,
});