import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowCart } from "../reduxSlice/uiSlice";

export default function Cart() {
  const showCart = useSelector((state) => state.ui.showCart);
  const dispatch = useDispatch();
  function handleToggleCart() {
    dispatch(toggleShowCart());
  }
  return (
    <section
      className={`w-full  bg-black/20 fixed left-0 bottom-0 top-0 right-0 transition-all duration-1000 ${
        showCart ? "translate-x-0" : "translate-x-full opacity-0"
      }`}
    >
      <div
        className={`absolute top-0 w-full p-10 right-0 min-h-screen bg-neutral-100 md:w-1/2 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex justify-between items-center text-neutral-800">
          <h1>Cart (0)</h1>
          <FontAwesomeIcon icon={faTimes} onClick={handleToggleCart} />
        </header>
      </div>
    </section>
  );
}
