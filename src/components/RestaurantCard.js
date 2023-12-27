const RestaurantCard = ({ data }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data?.info?.cloudinaryImageId}`}
        width={"100px"}
        height={"150px"}
        style={{ objectFit: "cover" }}
      />
      <h3>{data?.info?.name}</h3>
      <h4>{data?.info?.cuisines.join(", ")}</h4>
      <h4>{data?.info?.avgRating}</h4>
      <h4>{data?.info?.sla?.deliveryTime + " mins"}</h4>
    </div>
  );
};

export default RestaurantCard;
