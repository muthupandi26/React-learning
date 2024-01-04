import { FOOD_IMG } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  console.log(data, "dataaa");

  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg hover:bg-gray-300">
      <img
        className="object-cover w-[200px] h-[200px] rounded-lg"
        src={FOOD_IMG + data?.info?.cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{data?.info?.name}</h3>
      <h4>{data?.info?.cuisines.join(", ")}</h4>
      <h4>{"Rating " + data?.info?.avgRating} </h4>
      <h4>{data?.info?.sla?.deliveryTime + " mins"}</h4>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
