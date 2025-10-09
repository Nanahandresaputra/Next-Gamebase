import { httpGet } from "@/store/http/http";
import { ListGenres, ListGenresParams } from "./genres.interfaces";
import { config } from "@/config";

export const getGenresHelpers = async () => {
  const params: ListGenresParams = { key: config.keyRawg };
  await new Promise<ListGenres>((resolve, reject) => {
    httpGet({ params, url: `${config.baseUrlRawg}/genres` })
      .then((res) => {
        resolve(res);
        const listGenres = res.results;
        localStorage.setItem("listGenres", JSON.stringify(listGenres));
      })
      .catch((err) => {
        reject(err);
      });
  });
};
