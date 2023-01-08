import { meta } from "../mocks/meta";
export const apiClient = {
  getMeta,
  getItem,
};

type FetchOptions = {
  httpMethod?: string;
  path?: string;
};

const baseUrl = "https://api.owlms.store/";

async function _fetch({ httpMethod = "GET", path = "" }: FetchOptions) {
  const options = {
    method: httpMethod,
  };

  const data = await fetch(baseUrl + path, options).then((res) => {
    return res.json();
  });

  return data;
}

async function getMeta() {
  //   return meta;
  return await _fetch({ httpMethod: "GET", path: "api/meta" });
}

async function getItem(itemId: number) {
  return await _fetch({
    httpMethod: "GET",
    path: `api/item?id=${itemId}`,
  });
}
