/* eslint-disable react/prop-types */

export default function Filter({ filter, updateFilter }) {
  //create arry for filter
  let filterArr = [
    "All",
    "Men's Clothing",
    "Women's Clothing",
    "Jewellery",
    "Electronics",
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
