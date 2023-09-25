import { useDispatch } from "react-redux";
import { CDN_IMG } from "../utilis/common";
import { addItem } from "../utilis/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (ele) => {
    dispatch(addItem(ele));
  }

  return (
    <div>
      <h1 className="text-center">
        {items.map((ele) => (
          <div key={ele.card.info.id} className="p-2 m-2 flex flex-col gap-2  border-b-2 border-gray-300 text-left ">
            <div className="flex justify-between items-center">
              <div className="w-9/12">
                <div className="font-bold text-lg">
                  {ele.card.info.name}
                </div>
                <div className="font-medium">
                  {/* ₹ {ele.card.info.price / 100 || ele.card.info.defaultPrice / 100} */}
                  ₹ {ele.card.info.price ? ele.card.info.price / 100 : ele.card.info.defaultPrice / 100}
                </div>
                <p className="text-lg"  >{ele.card.info.description}</p>
              </div>
              <div className="w-3/12 relative rounded-sm" >
                <img className=" rounded-sm" src={CDN_IMG + ele.card.info.imageId} />
                <button className="px-4 py-2 bg-slate-100 shadow-md absolute bottom-0 left-8 rounded-md text-lg font-semibold" onClick={() => handleAddItem(ele)}>Add +</button>
              </div>
            </div>
          </div>
        ))}
      </h1>
    </div>)
}
export default ItemList;