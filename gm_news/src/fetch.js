import axios from "axios";
const apiBaseURL = "http://localhost:6700";

export const GET = (url) => {
  return axios.get(`${apiBaseURL}/${url}`);
};

// const headers = "some headers";

export const POST = (url, data) => {
  return axios(`${apiBaseURL}/${url}`, {
    method: "POST",
    // headers,
    data,
  });
};
