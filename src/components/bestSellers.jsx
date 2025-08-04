import statue from "../assets/statue2.jpg";
import statue1 from "../assets/statue1.jpeg";
import cap3 from "../assets/cap3.jpeg";
import perfume from "../assets/perfume.jpg";
import bgSm from "../assets/bg-sm.jpg";
import bs from "../assets/bs.jpg";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
import { motion, scale } from "framer-motion";

export default function Bestsellers() {
  const product = useSelector((state) => state.product.product);
  const bestsellers = product.filter((p) => p.bestseller);
  const [potrait, top, bottom, landscape] = bestsellers;
  return (
    <section className="flex flex-col gap-7 items-center  p-4 lg:py-10">
      <div className="py-10 space-y-3 px-2 text-neutral-800">
        <h1 className="text-center text-4xl  text-neutral-700 font-bold ">
          Our Best sellers
        </h1>
        <p className="text-center">
          Check out some of our products with top ranked purchases from
          customers
        </p>
      </div>
      {/* <div className="hidden flex-col gap-3 px-10 w-full md:flex lg:w-[85%] xl:w-[67%]">
        <div className="flex gap-3 w-full  h-[600px]">
          <div className="w-[50%] h-full">
            <BestsellerCard image={statue} product={potrait} />
          </div>
          <div className="w-[50%] space-y-[3%]">
            <div className="h-[49%] ">
              <BestsellerCard image={cap3} product={top} />
            </div>
            <div className="h-[49%] ">
              <BestsellerCard image={statue1} product={bottom} />
            </div>
          </div>
        </div>
        <div className="h-76 w-full">
          <BestsellerCard image={perfume} product={landscape} />
        </div>
      </div> */}
      <div className="flex flex-col gap-3 h-auto w-full lg:w-[95%] xl:w-[85%] 2xl:w-[75%] md:h-[550px] lg:h-[720px] md:flex-row ">
        <div className="w-full space-y-3 md:h-full md:w-[45%]">
          <div className=" aspect-square w-full md:aspect-auto md:h-[65%]">
            <BestsellerCard image={statue} product={potrait} />
          </div>
          <div className="aspect-video w-full md:aspect-auto md:h-[35%]">
            <BestsellerCard image={perfume} product={landscape} />
          </div>
        </div>
        <div className="w-full space-y-3 md:w-[55%]">
          <div className=" aspect-video relative overflow-hidden rounded-xl  md:aspect-auto  md:h-[25%]">
            <img src={bs} alt="" className="w-full  h-full object-cover" />
            <span className="p-5 absolute inset-0 flex items-center justify-center text-neutral-100 text-4xl">
              <h1>Get 15% off on first order</h1>
            </span>
          </div>
          <div className="flex space-x-2 aspect-square  grid-cols-2 md:aspect-auto m md:h-[75%]">
            <div className="w-full h-full">
              <BestsellerCard image={bgSm} product={bottom} />
            </div>
            <div className="gap-2 grid grid-rows-2 w-full h-full">
              <BestsellerCard image={cap3} product={top} />
              <BestsellerCard image={statue1} product={top} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-2 gap-3 lg:gap-6 w-full lg:w-[70%] ">
        <BestsellerCard image={statue} product={potrait} />
        <BestsellerCard image={cap3} product={top} />
        <BestsellerCard image={statue1} product={bottom} />
        <BestsellerCard image={perfume} product={landscape} />
      </div> */}
    </section>
  );
}

export function BestsellerCard({ product, image }) {
  return (
    <div className="relative h-full w-full rounded-xl overflow-hidden ">
      <motion.img
        whileHover={{ scale: 1.04 }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 100,
        }}
        src={image}
        alt={product.name}
        className="h-full w-full object-cover"
      />
      <span className="absolute left-2 top-2 px-3 py-0.5 text-xs outline-1 outline-gray-600/40 text-gray-50 rounded-full bg-gray-950/15 backdrop-blur-[1.5px] md:left-3 md :top-3">
        ${product.price}
      </span>
      <button className="right-2 top-1  cursor-pointer outline-1 outline-gray-600/40 bg-gray-950/15 backdrop-blur-[1.5px] rounded-full absolute md:right-3 md:top-1.5 p-1 ">
        <FontAwesomeIcon
          className=" text-md text-gray-50 hover:text-amber-400  "
          icon={faCartShopping}
        />
      </button>
      <span className="space-y-3 text-md text-gray-50 absolute bottom-3 left-3 md:text-xl">
        <h1>{product.name}</h1>
        <Button style="bg-gray-100 text-xs text-neutral-800 px-5 py-1.5">
          View Details{" "}
          <FontAwesomeIcon
            className="transform -rotate-45  text-md text-neutral-600 ml-1 hover:text-amber-400  "
            icon={faArrowRight}
          />
        </Button>
      </span>
    </div>
  );
  s;
}
