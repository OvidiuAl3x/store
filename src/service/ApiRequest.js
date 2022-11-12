import axios from "axios";

export const ProductsApi = () => {
  return axios
    .get("https://dummyjson.com/products")
    .then((res) => res.data)
    .catch((e) => console.warn(e));
};
