import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowCart } from "../reduxSlice/uiSlice";
import {
  removeFromCart,
  increaseQty,
  reduceQty,
} from "../reduxSlice/cartSlice";
import Button from "./button";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons/faTrashCan";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cart() {
  const [showAlert, setShowAlert] = useState(false);

  const cartDetails = useSelector((state) => state.cart.cart);
  const showCart = useSelector((state) => state.ui.showCart);
  const totalQty = useSelector((state) => state.cart.totalQty);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  function handleToggleCart() {
    dispatch(toggleShowCart());
  }

  useEffect(() => {
    document.body.style.overflow = showCart ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showCart]);

  const handleCheckout = () => {
    setShowAlert(true);
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 3500); // auto close after 2.5s
      return () => clearTimeout(timer);
    }
  }, [showAlert]);
  return (
    <AnimatePresence>
      {showCart && (
        <section className="w-full  bg-black/50 fixed inset-0  z-30 ">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="scrollbar-hide absolute top-0 w-full py-6 px-5 right-0 h-screen overflow-y-auto bg-neutral-100 md:w-1/2 lg:w-1/3 "
          >
            <header className=" flex justify-between items-center pb-5 text-neutral-800">
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

            {cartDetails.length > 0 && (
              <motion.main className="py-5 ">
                {cartDetails.map((p) => (
                  <ul key={p.id}>
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
                ))}
              </motion.main>
            )}
            {cartDetails.length > 0 && (
              <div className="z-40 sticky space-y-3 px-10 py-5 bottom-0 left-0 right-0 bg-neutral-100 shadow-md shadow-gray-300 rounded-2xl">
                <span className="flex w-full justify-between">
                  {" "}
                  <p className="font-semibold text-lg">Total:</p>
                  <p className="font-semibold text-lg">${totalPrice}</p>
                </span>
                <Button
                  onClick={handleCheckout}
                  style="w-full bg-gray-800 text-neutral-50 py-1.5 px-3 cursor-pointer hover:bg-gray-700 "
                >
                  Checkout
                </Button>
              </div>
            )}
            <AnimatePresence>
              {" "}
              {showAlert && (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 right-0 left-0 px-5 py-4 flex items-center justify-center z-50"
                >
                  <div className="bg-red-600 rounded-lg p-5 w-full text-center shadow-lg">
                    <h1 className="text-white font-bold text-md ">
                      Oh! Something went wrong.
                    </h1>
                    <p className="text-white ">
                      Server error. We are experiencing technical difficulties.
                      please try again later or you can place your orders via
                      our socials.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>
      )}
    </AnimatePresence>
  );
}
