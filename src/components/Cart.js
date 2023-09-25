import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, } from "../utilis/cartSlice";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return <div className="text-center m-5 p-5">
    <div className="flex gap-2 items-center justify-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button onClick={handleClearCart} className="px-4 py-2 m-2 bg-black text-white rounded-lg">Clear</button>
    </div>
    <div className="w-6/12 m-auto">
      {cartItems == 0 && <h1 className="text-lg font-bold">Add Items to your cart</h1>}
      <ItemList items={cartItems} />
    </div>
  </div>
}
export default Cart;