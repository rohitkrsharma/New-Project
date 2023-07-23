import { CDN_IMG } from "../utilis/common";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_IMG + cloudinaryImageId}
        alt="image" />
      <h3 className="cuisine">{name}</h3>
      <h4 className="cuisine">{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{resData.info.sla.deliveryTime} Minutes</h4>
    </div>
  )
}
export default RestaurantCard;