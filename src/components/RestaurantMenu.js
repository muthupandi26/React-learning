import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);

  console.log(resId, "resId");

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(resInfo?.cards[0]?.card?.card?.info, "ResInfo");

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p> {cuisines.join(", ")} </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.name}>
            {item.card.info.name} -{"Rs."}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
