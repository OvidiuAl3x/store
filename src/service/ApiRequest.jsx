export const GetData = async () => {
  const response = await fetch("http://localhost:3000/products");
  if (response.ok) {
    return await response.json();
  }
  throw new Error("something went wrong");
};

export const GetDataOrder = async () => {
  const response = await fetch(
    "http://localhost:3000/products?_sort=price&_order=asc"
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error("something went wrong");
};
