import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Search = () => {
  const data = useSelector((state) => state.product.data);
  const [filterData, setFilterData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.dsc.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };
  const clearInput = () => {
    setFilterData([]);
    setWordEntered("");
  };

  return (
    <div className="search-section">
      <input
        type="text"
        value={wordEntered}
        placeholder="Search for a meal.."
        className="searchInput"
        onChange={handleFilter}
      />
      {filterData.length === 0 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 icon-search"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ) : (
        <svg
          onClick={clearInput}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 icon-search"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
      {filterData.length !== 0 && (
        <div className="searchlist">
          {filterData.slice(0, 10).map((item) => {
            return (
              <p>
                <Link
                  to={`/menu/${item.id}`}
                  className="searchterm"
                  key={item.id}
                >
                  {" "}
                  {item.dsc}
                </Link>
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
