import axios from "axios";

export const ProductsApi = () => {
  return axios
    .get("https://dummyjson.com/products")
    .then((res) => res.data)
    .catch((e) => console.warn(e));
};

export const ProductId = (id) => {
  return axios.get(`https://dummyjson.com/products/${id}`)
  .then((res => res.data))
  .catch(e => console.warn(e))
};
