import { Link, NavLink } from "react-router-dom";
// import image from "../assets/1.jpg";

import Button from "./button";
import ProductCard from "./productCard";
import { useSelector } from "react-redux";

export default function ProductSection() {
  const product = useSelector((state) => state.product.product);
  const products = product.slice(0, 6);

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
      <div className="grid grid-cols-1 smx:grid-cols-2 gap-y-10 gap-x-3 w-full md:grid-cols-3 lg:gap-x-7 lg:w-[90%] xl:w-[72%]">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            // name={p.name} img={p.image} price={p.price}
            product={p}
          />
        ))}
      </div>
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
