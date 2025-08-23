import { Link, NavLink } from "react-router-dom";
// import image from "../assets/1.jpg";

import Button from "./button";
import ProductDisplay from "./productComponent";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { runSearch, setCurrentCategory } from "../reduxSlice/productSlice";

// import { useSelector } from "react-redux";

export default function ProductSection() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setCurrentCategory("caps"));
  //   dispatch(runSearch());
  // }, [dispatch]);

  return (
    <section
      className="flex flex-col gap-14 items-center py-14 px-4 lg:px-20 "
      id="productSection"
    >
      <ul className="flex flex-wrap gap-6">
        <ProductButton title="All" to="/" />
        <ProductButton title="Best Sellers" to="/bestsellers" />
        <ProductButton title="Caps" to="/caps" />
        <ProductButton title="Perfumes" to="/perfumes" />
        <ProductButton title="Interiors" to="/interiors" />
      </ul>
      <ProductDisplay limit={6} />
      <Button>See More Collection</Button>
    </section>
  );
}

export function ProductButton({ to, title }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          `py-2 px-6 text-gray-800 outline-1 outline-gray-800 rounded-full hover:bg-gray-800 hover:text-white ${
            isActive ? "bg-gray-800 text-white" : ""
          }`
        }
        to={to}
      >
        {title}
      </NavLink>
    </li>
  );
}
