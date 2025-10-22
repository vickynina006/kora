import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../reduxSlice/cartSlice";
// import Button from "./button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProductDisplay({ limit }) {
  const product = useSelector((state) => state.product.filteredProducts);
  const searchTerm = useSelector((state) => state.product.searchTerm);
  const products = limit ? product.slice(0, limit) : product;
  const navigate = useNavigate();
  return (
    <>
      {products.length === 0 && (
        <div className="flex w-full">
          <p className="mx-auto text-2xl">
            <strong className="italic">{searchTerm}</strong> Not found
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 smx:grid-cols-2 gap-y-10 gap-x-3 w-full md:grid-cols-3 lg:gap-x-8 lg:w-[95%] xl:w-[72%]">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}

export function ProductCard({ product, style }) {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ y: 50, scale: 0.9, opacity: 0 }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      viewport={{ once: "true", amount: 0.2 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      tabIndex={0}
      onClick={() => navigate(`/products/${product.id}`)}
      className={`relative group flex flex-col flex-shrink-0 rounded-2xl bg-[#e2dcd1] ${style}`}
    >
      <div className="w-full pb-3 pt-8 px-2 h-36 md:px-5 md:pt-12 md:pb-5 md:h-60">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-3 flex flex-col mt-auto space-y-2">
        <h1 className="leading-tight">{product.name}</h1>
        <div className="flex items-center justify-between">
          <p>${product.price}</p>
          <button className="flex justify-end rounded-full  bg-white p-2">
            <FontAwesomeIcon
              onClick={() => dispatch(addToCart(product))}
              className="z-10 text-md text-gray-800 cursor-pointer hover:text-amber-600"
              icon={faCartShopping}
            />
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 flex items-center rounded-2xl justify-center w-full h-full bg-black/10 opacity-0 group-hover:opacity-100 focus:opacity-100 active:opacity-100 transition-all duration-300">
        <Link
          to={`/products/${product.id}`}
          className="translate-y-full rounded-full text-white text-sm bg-gray-800 px-5 py-1.5 transition-all duration-300 group-hover:translate-y-0 focus:translate-y-0 active:translate-y-0"
        >
          View Details
        </Link>
      </div>
      {product.bestseller && (
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white md:py-1 md:px-3 md:top-3 md:left-3">
          <h1 className="text-sm md:text-md">Top Seller</h1>
        </div>
      )}
    </motion.div>
  );
}
