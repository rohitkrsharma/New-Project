import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utilis/mockDta";

const Body = () => {
  const [listOfrestaurant, setListOfrestaurant] = useState(resList);
  return (
    <div className="body">
      <button className="filter-btn" onClick={() => {
        const filtered = listOfrestaurant.filter((res) => res.info.avgRating > 4);
        setListOfrestaurant(filtered);
      }}>Top Rated Restaurents</button>
      <div className="res-container">
        {listOfrestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}

      </div>
    </div>
  )
}
export default Body;