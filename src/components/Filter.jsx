/* eslint-disable react/prop-types */

export default function Filter({ filter, updateFilter }) {
  //create arry for filter
  let filterArr = [
    "all",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  //map the array into filter buttons
  let filterMap = filterArr.map((item) => {
    return (
      <p
        key={item}
        className={`filter ${filter === item ? "active--filter" : ""}`}
        onClick={() => updateFilter(item)}
      >
        {item}
      </p>
    );
  });
  return <div className="filter--container">{filterMap}</div>;
}
