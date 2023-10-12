/* eslint-disable react/prop-types */

import { useState } from "react";

export default function Card({ title, price, category, desc, rating }) {
  //manage state for details
  let [details, setDetails] = useState(false);
  return (
    <div className="card--border">
      <div className="card--head">
        <p className="title">{title}</p>
        <p className="price">Price: ${price}</p>
        <button
          className="details"
          onClick={() => setDetails((prevState) => !prevState)}
        >
          View details
        </button>
      </div>
      {details && (
        <div className="card--body">
          <p className="desc">
            <strong>Description:</strong> {desc}
          </p>
          <div className="card--rating">
            <p className="category">
              <strong>Category:</strong> {category}
            </p>
            <p className="rating--rate">
              <strong>Rating:</strong> {rating.rate} /5
            </p>
            <p className="rating--count">
              <strong>{rating.count}</strong> customers have rated this product
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
