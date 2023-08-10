import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utilis/common";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);



  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  }
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } = resInfo.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};


  return (
    <>
      <h1>
        {name}
      </h1>
      <h3>
        {cuisines.join(' , ')} - {costForTwoMessage}
      </h3>
      <h1>Menu</h1>
      <ul>
        {
          itemCards.map((item) => (<li key={item.card?.info?.id}>{item.card?.info?.name} - {"Rs"} {item.card?.info?.price}</li>))
        }
      </ul>
    </>
  )

}
export default RestaurantMenu;