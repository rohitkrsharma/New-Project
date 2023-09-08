import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilis/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useState } from "react";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);


  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } = resInfo.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

  const categories = resInfo.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-extrabold py-6 text-2xl">
        {name}
      </h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(' , ')} - {costForTwoMessage}
      </h3>
      {/* controlled component */}
      {
        categories.map((category, index) => <RestaurantCategory data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}  />)
      }
    </div>
  )

}
export default RestaurantMenu;