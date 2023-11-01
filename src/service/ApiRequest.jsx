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
export const GetDataMenClothes = async (price, asc) => {
  const response = await fetch(
    `http://localhost:3000/products?category=men&type2=clothes&_sort=${price}&_order=${asc}`
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error("something went wrong");
};
export const GetDataMenAccessories = async (price, asc) => {
  const response = await fetch(
    `http://localhost:3000/products?category=men&type2=accessories&_sort=${price}&_order=${asc}`
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error("something went wrong");
};
export const GetDataMenWatches = async (price, asc) => {
  const response = await fetch(
    `http://localhost:3000/products?category=men&type2=watches&_sort=${price}&_order=${asc}`
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error("something went wrong");
};
export const GetDataMenShoes = async (price, asc) => {
  const response = await fetch(
    `http://localhost:3000/products?category=men&type2=shoes&_sort=${price}&_order=${asc}`
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error("something went wrong");
};
