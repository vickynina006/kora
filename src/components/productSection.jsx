import { Link } from "react-router-dom";
import { useState } from "react";
import { Details } from "./heroSection";

import Button from "./button";
import ProductDisplay from "./productComponent";
import { AnimatePresence } from "framer-motion";

export default function ProductSection({ productRef }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <section
      ref={productRef}
      className="flex flex-col gap-14 items-center py-14 px-4  "
      id="productSection"
    >
      <ul className="flex flex-wrap gap-6">
        <ProductButton title="All" to="/" bg="bg-gray-800 text-white" />

        <li>
          <a
            href="#bestsellers"
            className="py-2 px-6 text-gray-800 outline-1  outline-gray-800 rounded-full ${bg} hover:bg-gray-800 hover:text-white"
          >
            Best Sellers
          </a>
        </li>
        <ProductButton title="Caps" to="/caps" />
        <ProductButton title="Perfumes" to="/perfumes" />
        <ProductButton title="Interiors" to="/interiors" />
      </ul>
      <ProductDisplay limit={6} />
      <span className="relative flex flex-col items-center">
        <Button onClick={() => setShowDetails((prev) => !prev)}>
          See More Collection
        </Button>{" "}
        <AnimatePresence>
          {" "}
          {showDetails && <Details style="bg-gray-800 mt-14" />}
        </AnimatePresence>
      </span>
    </section>
  );
}

export function ProductButton({ to, title, bg }) {
  return (
    <li>
      <Link
        className={`py-2 px-6 text-gray-800 outline-1  outline-gray-800 rounded-full ${bg} hover:bg-gray-800 hover:text-white `}
        to={to}
      >
        {title}
      </Link>
    </li>
  );
}
