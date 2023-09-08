import { CDN_IMG } from "../utilis/common";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const logo = <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-3 w-3 text-white ml-1" // Adjust size and color as needed
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 0a1 1 0 0 1 .755.352l2.931 3.62 6.53.952a1 1 0 0 1 .555 1.705l-4.77 4.652 1.126 6.574a1 1 0 0 1-1.451 1.055L10 16.74l-5.891 3.09a1 1 0 0 1-1.451-1.055l1.126-6.573-4.77-4.652a1 1 0 0 1 .555-1.705l6.53-.952L9.245.352A1 1 0 0 1 10 0z"
    />
  </svg>
  return (
    <div className="m-4 p-3 w-80 bg-slate-100 rounded-md hover:bg-slate-200">
      <img
        className="rounded-sm w-80 h-[230px]"
        src={CDN_IMG + cloudinaryImageId}
        alt="image" />
      <h3 className="font-bold pt-2 text-lg line-clamp-1">{name}</h3>
      <h4 className="line-clamp-1 text-slate-500">{cuisines.join(", ")}</h4>
      <div className="flex justify-between my-2">
        <div className={`flex items-center gap-1 px-2 rounded-md ${avgRating < 4 ? 'bg-orange-300' : 'bg-green-400'}`}>
          {logo}
          <h6 className={`text-white font-medium `}>
            {avgRating}
          </h6>
        </div>
        <h6>{resData.info.sla.deliveryTime} Mins</h6>
        <h6>{resData.info.costForTwo}</h6>
      </div>
    </div>
  )
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        {/* <label className="absolute left-4 p-2 bg-black text-white rounded-lg">Promoted</label> */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;