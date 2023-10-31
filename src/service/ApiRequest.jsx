export const GetData = async (price, asc) => {
  const response = await fetch(
    `http://localhost:3000/products?_sort=${price}&_order=${asc}`
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error("something went wrong");
};

export const GetDataMen = async (price, asc) => {
  const response = await fetch(
    `http://localhost:3000/products?category=men&_sort=${price}&_order=${asc}`
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error("something went wrong");
};
