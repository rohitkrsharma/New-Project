import useRestaurantMenu from "../utilis/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } = resInfo.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};


  return (
    <div className="p-4 m-4">
      <h1 className="font-extrabold py-3">
        {name}
      </h1>
      <h3>
        {cuisines.join(' , ')} - {costForTwoMessage}
      </h3>
      <h1 className="font-extrabold py-3">Menu</h1>
      <ul className="flex flex-col gap-2 pl-4">
        {
          itemCards.map((item) => (<li key={item.card?.info?.id} className="list-disc">{item.card?.info?.name} - {"Rs"} {item.card?.info?.price}</li>))
        }
      </ul>
    </div>
  )

}
export default RestaurantMenu;