import { HttpGet } from "./http.interface";
import axios from "axios";

export const httpGet = async ({ params, url }: HttpGet) => {
  return await axios({
    method: "GET",
    params,
    url,
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   "Content-Type": "application/json",
    // },
    // withCredentials: true,
  })
    .then((res) => {
      console.log({ res });
      return res.data;
    })
    .catch((err) => {
      console.log({ err });
      return err;
    });
};
