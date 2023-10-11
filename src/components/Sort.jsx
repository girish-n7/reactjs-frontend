/* eslint-disable react/prop-types */

import { useState } from "react";

export default function Sort({ updateSort }) {
  //manage state for sort div
  let [sortDiv, setSortDiv] = useState(false);

  //create array for sort
  let sortArr = [
    "Price: high to low",
    "Price: low to high",
    "Rating: high to low",
    "Rating: low to high",
  ];

  //map the array into sort options
  let sortMap = sortArr.map((item) => {
    return (
      <p
        key={item}
        className="sort"
        onClick={() => {
          setSortDiv((prevState) => !prevState);
          updateSort(item);
        }}
      >
        {item}
      </p>
    );
  });

  return (
    <div className="sort--container">
      <p className="sort--prompt">
        Sort
        <img
          className="sort--arrow"
          src=""
          alt="arrow"
          onClick={() => setSortDiv((prevState) => !prevState)}
        ></img>
      </p>
      {sortDiv && <div className="sort--div">{sortMap}</div>}
    </div>
  );
}
