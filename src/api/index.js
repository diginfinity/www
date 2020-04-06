/** @format */

import axios from "axios";

export const digitalApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/"
});
