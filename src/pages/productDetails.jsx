import { useParams } from "react-router-dom";
import Button from "../components/button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart } from "../reduxSlice/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { ProductCard } from "../components/productComponent";
import { useRef } from "react";

export default function ProductDetails() {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef(null);

  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.product.product);
  const product = products.find((p) => p.id === id);
  const cProduct = products.filter((p) => p.id !== id);
  const carouselProducts = cProduct.slice(0, 5);

  function add() {
    setSelectedQuantity((prev) => prev + 1);
  }
  function remove() {
    setSelectedQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }

  function scroll(dir) {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -width : width,
        behavior: "smooth",
      });
    }
  }

  function handleScrollProgress(e) {
    const { scrollWidth, scrollLeft, clientWidth } = e.target;
    const scrollProgress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setProgress(scrollProgress);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="pt-24">
      <main className="w-full p-4 smx:p-7 flex flex-col md:flex-row gap-10 md:p-20 lg:px-40">
        {!product ? (
          <div className="mx-auto py-20 w-full outline-2 outline-gray-500 rounded-lg px-10 md:w-3/4">
            <p className=" text-center text-neutral-600 text-3xl font-bold md:text-4xl">
              Product not found!
            </p>
          </div>
        ) : (
          <>
            <div className="w-full p-10 bg-amber-50 rounded-lg overflow-hidden aspect-square md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full space-y-4  md:w-1/2 lg:p-10">
              <h1 className="text-2xl font-bold text-gray-800">
                {product.name}
              </h1>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-gray-600 ">
                <strong>Measurement:</strong> {product.measurement}
              </p>
              <p className="text-lg font-semibold">${product.price}</p>

              <div className="flex gap-5">
                <div className="flex gap-4 items-center">
                  <button
                    className="w-7 h-7 rounded-full  outline-1 outline-neutral-800 hover:bg-neutral-800 hover:text-white"
                    onClick={remove}
                  >
                    -
                  </button>
                  <span className="text-neutral-600">{selectedQuantity}</span>
                  <button
                    className="w-7 h-7 rounded-full text-neutral-600 outline-1 outline-neutral-600 hover:bg-neutral-600 hover:text-white"
                    onClick={add}
                  >
                    +
                  </button>
                </div>
                <Button
                  onClick={() =>
                    dispatch(
                      addToCart({ ...product, quantity: selectedQuantity })
                    )
                  }
                >
                  Add to Cart
                </Button>
              </div>
              <div className="bg-amber-600 p-2 text-sm text-white flex justify-center gap-2 items-center rounded-xl my-6">
                <FontAwesomeIcon icon={faCheck} />
                <p className=" ">In stock, available for immediate shipping</p>
              </div>
              <strong className="text-gray-700 flex ">
                Note, delivery usually takes 5-7 business days.
              </strong>
              <div className="text-gray-600">
                <p>
                  <FontAwesomeIcon icon={faCheck} className="mr-3" /> 15% off on
                  orders over $100
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="mr-3" /> 20 days
                  return policy
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="mr-3" /> fast
                  dispatch and trackable shipping
                </p>
              </div>
            </div>
          </>
        )}
      </main>
      <section className="w-full px-6 py-20 space-y-14 rounded-lg overflow-hidden lg:p-20">
        <p className="text-center text-3xl text-neutral-700 font-bold md:text-4xl">
          You may also like
        </p>
        <div className="hidden gap-10 justify-end md:flex ">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full text-gray-600 outline-1 outline-gray-600 hover:bg-gray-600 hover:text-white"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full text-gray-600 outline-1 outline-gray-600 hover:bg-gray-600 hover:text-white"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div
          className="overflow-x-auto scrollbar-hide overflow-y-hidden"
          ref={scrollRef}
          onScroll={handleScrollProgress}
        >
          <div className="flex gap-5 lg:gap-10 ">
            {carouselProducts.map((p) => (
              <ProductCard key={p.id} product={p} style="w-[85%] md:w-[29%]" />
            ))}
          </div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full mx-auto w-1/2 overflow-hidden">
          <div
            className="h-full bg-gray-800 w-[10%] rounded-full transition-transform duration-100 "
            style={{
              transform: `translateX(${progress * 9}% )`, //(100%(parentwidth)-10%(childwith))/childwidth=9
            }}
          />
        </div>
      </section>
    </div>
  );
}
