import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
// import { useSelector } from "react-redux";
import { toggleShowCart } from "../reduxSlice/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, runSearch } from "../reduxSlice/productSlice";
import { useState } from "react";
// import Cart from "./cart";

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);

  const totalQty = useSelector((state) => state.cart.totalQty);
  const dispatch = useDispatch();

  function handleChange(e) {
    const value = e.target.value;
    dispatch(setSearchTerm(value));
    if (value.trim() === "") {
      dispatch(runSearch());
    }
  }

  function handleToggleCart() {
    dispatch(toggleShowCart());
  }
  return (
    <div className="w-full fixed top-0 right-0 left-0 z-30">
      <header className="  bg-gray-950/70 px-10 py-8 backdrop-blur-md flex items-center justify-between lg:px-28">
        <h1 className="font-family-monte text-3xl font-bold text-neutral-50">
          kORA
        </h1>
        <nav>
          <ul className="hidden gap-10 font-semibold font-family-inter text-neutral-50 lg:flex">
            <li className="hover:text-gray-300">
              <Link>Home</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link>About</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link>Products</Link>
            </li>
            <li>
              <a className="outline-1 outline-neutral-50 rounded-full px-7 py-2 hover:text-gray-300 hover:outline-gray-300">
                Buy
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-8 items-center font-semibold font-family-inter text-neutral-50  ">
          <FontAwesomeIcon
            onClick={() => setOpenSearch(!openSearch)}
            className="hidden text-xl cursor-pointer hover:text-gray-300 md:flex"
            icon={faMagnifyingGlass}
          />

          <div className="relative " onClick={handleToggleCart}>
            <FontAwesomeIcon
              className="hidden text-xl cursor-pointer hover:text-gray-300 md:flex"
              icon={faCartShopping}
            />
            <span className="px-0.5 text-xs flex items-center justify-center min-w-4 min-h-4 z-10 text-neutral-50 bg-amber-600 rounded-full absolute -top-2 -right-1.5 ">
              {totalQty > 9 ? "9+" : totalQty}
            </span>
          </div>
        </div>
      </header>
      <div className="w-full px-5 py-3 bg-white shadow-md flex items-center justify-center lg:px-20 md:py-5">
        <div className="w-full relative">
          {" "}
          <input
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && dispatch(runSearch())}
            type="text"
            placeholder="Search products..."
            className="  w-full border-none outline  outline-gray-400 rounded-full px-4 py-1.5 md:py-3"
          />
          <button
            onClick={() => dispatch(runSearch())}
            className=" absolute right-2 top-1.5 flex items-center justify-center bg-gray-900 text-white rounded-full p-1.5 md:p-2 "
          >
            <FontAwesomeIcon
              className="text-sm cursor-pointer hover:text-gray-300 md:text-xl"
              icon={faMagnifyingGlass}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
