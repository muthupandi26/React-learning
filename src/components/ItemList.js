import { addItem } from "../utils/cartSlice";
import { FOOD_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2  border-gray-200 border-b-2 text-left"
          >
            <div className="py-2 flex justify-between">
              <div>
                <span>{item?.card?.info?.name}</span>
                <span>
                  - ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <div>
                <img
                  className="w-14"
                  src={FOOD_IMG + item?.card?.info?.imageId}
                />
                <button
                  className="text-center bg-black text-gray-300 p-2 text-xs"
                  onClick={() => handleAddItems(item)}
                >
                  Add +
                </button>
              </div>
            </div>

            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
