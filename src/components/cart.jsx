import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowCart } from "../reduxSlice/uiSlice";
import {
  removeFromCart,
  increaseQty,
  reduceQty,
} from "../reduxSlice/cartslice";
import Button from "./button";
import { Link } from "react-router-dom";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons/faTrashCan";

export default function Cart() {
  const cartDetails = useSelector((state) => state.cart.cart);
  const showCart = useSelector((state) => state.ui.showCart);
  const totalQty = useSelector((state) => state.cart.totalQty);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  function handleToggleCart() {
    dispatch(toggleShowCart());
  }
  return (
    <section
      className={`w-full  bg-black/40 fixed inset-0 transition-all duration-1000 z-30 ${
        showCart ? "flex" : "hidden"
      }`}
    >
      <div
        className={`scrollbar-hide absolute top-0 w-full py-6 px-5 right-0 h-screen overflow-y-auto bg-neutral-100 md:w-1/2 lg:w-1/3 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex justify-between items-center pb-5 text-neutral-800">
          <h1>Cart ({totalQty})</h1>
          <FontAwesomeIcon icon={faTimes} onClick={handleToggleCart} />
        </header>
        {cartDetails.length === 0 && (
          <main className="flex flex-col py-20 gap-5 justify-center w-full">
            <strong className="text-center text-xl text-neutral-900">
              Your Cart Is Empty!
            </strong>
            <p className="text-center">Add items to your cart.</p>
            <a
              href="#productSection"
              className=" flex justify-center"
              onClick={handleToggleCart}
            >
              <Button style="w-full bg-gray-800 text-neutral-50 py-1.5 px-3 cursor-pointer lg:w-1/2  ">
                Shop Now
              </Button>
            </a>
          </main>
        )}

        {cartDetails.length > 0 &&
          cartDetails.map((p) => (
            <main className="py-5" key={p.id}>
              <ul>
                <li className="border-b-2 gap-2 border-b-gray-300 py-5 flex w-full">
                  <div className="w-[25%]  flex p-1 items-center">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="flex flex-col ml-3 gap-2  w-[53%]">
                    <h2 className="text-md text-neutral-700">{p.name}</h2>
                    <p className="text-sm text-neutral-600">
                      ${p.price} per product
                    </p>
                    <div className="flex gap-4 items-center">
                      <button
                        className="w-7 h-7 rounded-full  outline-1 outline-neutral-800"
                        onClick={() => dispatch(reduceQty(p.id))}
                      >
                        -
                      </button>
                      <span className="text-neutral-600">{p.quantity}</span>
                      <button
                        className="w-7 h-7 rounded-full text-neutral-600 outline-1 outline-neutral-600"
                        onClick={() => dispatch(increaseQty(p.id))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col w-[22%]  items-end justify-between">
                    <p>${p.priceSum}</p>
                    <FontAwesomeIcon
                      onClick={() => dispatch(removeFromCart(p.id))}
                      icon={faTrashCan}
                      className="text-neutral-500 cursor-pointer hover:text-red-400"
                    />
                  </div>
                </li>
              </ul>
            </main>
          ))}
      </div>
    </section>
  );
}
