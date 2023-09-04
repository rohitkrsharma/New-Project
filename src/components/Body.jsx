import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";

const Body = () => {
  const [listOfrestaurant, setListOfrestaurant] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfrestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
    setFilteredRestaurants(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  }


  const handleSearch = () => {
    const filteredRestaurant = listOfrestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurant);
  };

  const handleTopRated = () => {
    const filtered = listOfrestaurant.filter((res) => res.info.avgRating > 4);
    setFilteredRestaurants(filtered);
  };
  console.log('body rendered');
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>You are offline !! please check your connection</h1>
  return listOfrestaurant.length == 0 ? <Shimmer /> : (
    <div className="body">
      <div className="flex gap-1 items-center">
        <div className=" p-4 m-4 gap-2">
          <input
            type="text"
            className="py-2 px-4 rounded-lg border border-black focus:border-2 focus:border-black focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="px-4 py-2 bg-blue-400 m-3 rounded-lg" onClick={handleSearch}>Search</button>
        </div>
        <div>
          <button className="px-4 py-2 bg-blue-400 rounded-lg" onClick={handleTopRated}>Top Rated Restaurants</button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link className="decoration" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;