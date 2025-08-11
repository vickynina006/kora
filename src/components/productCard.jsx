import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../reduxSlice/cartslice";
import Button from "./button";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="relative flex flex-col rounded-2xl bg-neutral-100">
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
              className=" text-md text-gray-800 cursor-pointer hover:text-amber-600"
              icon={faCartShopping}
            />
          </button>
        </div>
      </div>
      {product.bestseller && (
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white md:py-1 md:px-3 md:top-3 md:left-3">
          <h1 className="text-sm md:text-md">Top Seller</h1>
        </div>
      )}
    </div>
  );
}
