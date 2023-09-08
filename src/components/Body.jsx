import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
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

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
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
  console.log('body rendered', listOfrestaurant);
  const onlineStatus = useOnlineStatus();


  if (onlineStatus === false) return <h1>You are offline !! please check your connection</h1>
  return listOfrestaurant.length === 0 ? <Shimmer /> : (
    <div>
      <div className="flex flex-col md:flex-row gap-4 items-center p-4 md:p-10 bg-black justify-evenly">
        <div>
          <h1 className="text-white font-bold text-2xl md:text-4xl px-4 md:px-8">Find restaurants near you..</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            className="w-full md:w-72 h-12 px-4 rounded-lg border border-black focus:border-2 focus:border-black focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search restaurants..."
          />
          <button className="px-4 py-2 h-12 bg-slate-400 m-3 rounded-lg text-md font-bold text-white" onClick={handleSearch}>Search</button>
        </div>
        <div>
          <button className="px-4 py-2 h-12 bg-blue-400 rounded-lg text-md font-bold text-white" onClick={handleTopRated}>Top Rated Restaurants</button>
        </div>

      </div>

      <div className="flex flex-wrap w-[80%] gap-6 m-auto justify-evenly">
        {filteredRestaurants.map((restaurant) => (
          <Link className="decoration" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {
              restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;