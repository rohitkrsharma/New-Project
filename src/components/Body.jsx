import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
  return listOfrestaurant.length == 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="input-text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleTopRated}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
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