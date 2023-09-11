import React, { useEffect, useState } from "react";
import { GetData } from "../service/ApiRequest";

const ListItem = ({ item, id, filterHandler }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`p-2 ${active ? "text-primary font-semibold" : "bg-white"}`}
      key={id}
    >
      <label htmlFor={item} for={item} className="cursor-pointer ">
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

const LeftBar = ({ setFilterTags, filterTags }) => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const data = await GetData();
      setData(data);
    })();
  }, []);

  const filterHandler = (e) => {
    if (e.target.checked) {
      setFilterTags([...filterTags, e.target.value]);
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== e.target.value)
      );
    }
  };

  const dataRemoveDuplicate = data?.map((item) => item.type);

  const removeDuplicate = [...new Set(dataRemoveDuplicate)];

  return (
    <div className="ml-20 bg-white absolute">
      {removeDuplicate?.map((item, id) => (
        <ListItem item={item} id={id} filterHandler={filterHandler} />
      ))}
    </div>
  );
};

export default LeftBar;
