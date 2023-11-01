import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ListItem = ({ item, id, filterHandler }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`p-1 ml-2`} key={id}>
      <label
        htmlFor={item}
        for={item}
        className="cursor-pointer flex items-center gap-1 w-fit"
      >
        <input
          type="checkbox"
          onChange={filterHandler}
          value={item}
          id={item}
          onClick={() => setActive(!active)}
        />

        {item}
      </label>
    </div>
  );
};

const LeftBar = ({
  setFilterTags,
  filterTags,
  data,
  filterMobile,
  setFilterMobile,
}) => {
  const { innerWidth: width } = window;

  const filterHandler = (e) => {
    if (e.target.checked) {
      setFilterTags([...filterTags, e.target.value]);
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== e.target.value)
      );
    }
  };

  const dataRemoveDuplicateCategory = data?.map((item) => item.type);
  const removeDuplicateCategory = [...new Set(dataRemoveDuplicateCategory)];

  const size = ["XS", "S", "M", "L", "XL", "XXL"];
  const price = [
    "Under 10$",
    "10$ - 20$",
    "20$ - 50$",
    "50$ - 100$",
    "100$ - 250$",
    "250$ - 500$",
    "500$ - 1000$",
  ];

  return (
    <>
      {filterMobile || width > 640 ? (
        <div className="md:ml-4 bg-white h-fit mx-5 duration-300 animate-opacity">
          <div>
            <AiOutlineClose
              className="absolute right-8 text-red-600 text-lg md:hidden"
              onClick={() => setFilterMobile(false)}
            />
            <p className="text-xl font-semibold ml-3 mt-4 mb-2">Filters</p>
            <div className="flex flex-wrap gap-2 p-2">
              {filterTags.map((item) => (
                <p className="border-2 border-primary rounded-full px-2 text-sm w-fit">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold ml-3 mt-4 mb-2">Category</p>
            <div className="max-h-[15em] overflow-auto scrollBar">
              {removeDuplicateCategory?.map((item, id) => (
                <ListItem
                  key={id}
                  item={item}
                  id={id}
                  filterHandler={filterHandler}
                />
              ))}
            </div>
          </div>
          <hr className="w-[90%] m-auto bg-primary h-[3px]" />
          <div>
            <p className="text-xl font-semibold ml-3 mt-4 mb-2">Size</p>
            <div className="max-h-[15em] overflow-auto scrollBar">
              {size?.map((item, id) => (
                <ListItem
                  key={id}
                  item={item}
                  id={id}
                  filterHandler={filterHandler}
                />
              ))}
            </div>
          </div>
          <hr className="w-[90%] m-auto bg-primary h-[3px]" />
          <div>
            <p className="text-xl font-semibold ml-3 mt-4 mb-2">Price</p>
            <div className="max-h-[15em] overflow-auto scrollBar p-2">
              {price?.map((item, id) => (
                <ListItem
                  key={id}
                  item={item}
                  id={id}
                  filterHandler={filterHandler}
                />
              ))}
            </div>
          </div>
          <hr className="w-[90%] m-auto bg-primary h-[3px] mb-10" />
        </div>
      ) : null}
    </>
  );
};

export default LeftBar;
