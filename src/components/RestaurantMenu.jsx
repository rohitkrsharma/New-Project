import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utilis/common";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {

    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);

  };

  // Check if resInfo is null before destructuring
  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } = resInfo.cards?.[0]?.card?.card?.info || {};
  const { itemCards } = resInfo.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      <div>
        <ul>
          {itemCards.map(item => <li key={item.card?.info?.id}>{item.card?.info?.name} - {"Rs."} {item?.card?.info?.price / 100}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
