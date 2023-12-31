const RestaurantCard = ({ data }) => {
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg hover:bg-gray-300">
      <img
        className="object-cover w-[200px] h-[200px] rounded-lg"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data?.info?.cloudinaryImageId}`}
      />
      <h3 className="font-bold py-2 text-lg">{data?.info?.name}</h3>
      <h4>{data?.info?.cuisines.join(", ")}</h4>
      <h4>{"Rating " + data?.info?.avgRating} </h4>
      <h4>{data?.info?.sla?.deliveryTime + " mins"}</h4>
    </div>
  );
};

export default RestaurantCard;
