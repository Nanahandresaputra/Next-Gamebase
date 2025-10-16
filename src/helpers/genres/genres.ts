import { httpGet } from "@/store/http/http";
import { ListGenres, ListGenresParams } from "./genres.interfaces";
import { config } from "@/config";

export const getGenresHelpers = async () => {
  const params: ListGenresParams = { key: config.keyRawg };
  await new Promise<ListGenres>((resolve, reject) => {
    httpGet({ params, url: `${config.baseUrlRawg}/genres` })
      .then((res) => {
        resolve(res.results);
        const listGenres = res.results;
        localStorage.setItem("listGenres", JSON.stringify(listGenres));

        window.dispatchEvent(
          new CustomEvent("listGenresUpdated", { detail: listGenres })
        );
      })
      .catch((err) => {
        reject(err);
      });
  });
};
