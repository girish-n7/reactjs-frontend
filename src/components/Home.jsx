import { useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import Sort from "./Sort";

export default function Home() {
  //manage state for result
  let [result, setResult] = useState(null);

  //manage state for filter
  let [filter, setFilter] = useState("all");

  //manage state for sort
  let [sort, setSort] = useState(null);

  //handle filter update
  function updateFilter(item) {
    setFilter(item);
  }

  //handle sort update
  function updateSort(item) {
    setSort(item);
  }

  //call backend api
  fetch("https://nodejs-backend-peach.vercel.app/", {
    method: "GET",
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((result) => setResult(result))
    .catch((err) => console.error("Error: " + err));

  //filter result
  let filterRes =
    filter === "all" ? result : result.find((item) => item.category === filter);

  //sort result
  // let sortRes

  //map the result into cards
  let cardMap = filterRes?.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        price={item.price}
        category={item.category}
        desc={item.description}
        rating={item.rating}
      />
    );
  });

  return (
    result && (
      <div className="home--container">
        <div className="home--head">
          <Filter filter={filter} updateFilter={updateFilter} />
          <Sort updateSort={updateSort} />
        </div>
        {sort && (
          <p className="sortby">
            Sort by {sort}{" "}
            <button className="sort--clear" onClick={() => setSort(null)}>
              Clear sort
            </button>
          </p>
        )}
        <div className="card--container">{cardMap}</div>
      </div>
    )
  );
}
