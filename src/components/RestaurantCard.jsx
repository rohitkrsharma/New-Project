import { CDN_IMG } from "../utilis/common";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  return (
    <div className="m-4 p-3 w-[250px] bg-slate-100 rounded-md hover:bg-slate-200">
      <img
        className="rounded-sm w-[250px] h-[230px]"
        src={CDN_IMG + cloudinaryImageId}
        alt="image" />
      <h3 className="font-bold py-2 text-lg line-clamp-1">{name}</h3>
      <h4 className="line-clamp-1">{cuisines.join(", ")}</h4>
      <div className="flex justify-between my-2">
        <h4>{avgRating} Stars</h4>
        <h4>{resData.info.sla.deliveryTime} Minutes</h4>
      </div>
    </div>
  )
}
export default RestaurantCard;