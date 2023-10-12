export default function Placeholder() {
  return (
    <div className="card--border shimmer" style={{ paddingTop: "0" }}>
      <div className="card--head" style={{ paddingTop: "24px" }}>
        <p className="title">Loading card ...</p>
        <p className="price">Price: $--</p>
        <button className="details">View details</button>
      </div>
    </div>
  );
}
