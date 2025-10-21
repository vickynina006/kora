import statue from "../assets/statue2.jpg";
import statue1 from "../assets/statue1.jpeg";
import cap3 from "../assets/cap3.jpeg";
import perfume from "../assets/perfume.jpg";
import bgSm from "../assets/bg-sm.jpg";
import bs from "../assets/bs.jpg";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../reduxSlice/cartslice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Bestsellers() {
  const product = useSelector((state) => state.product.product);
  const bestsellers = product.filter((p) => p.bestseller);
  const [statue1p, top, wineCap, perfumep, statue2p] = bestsellers;
  return (
    <section
      id="bestsellers"
      className="flex flex-col gap-7 items-center  p-4 lg:py-10"
    >
      <div className="py-10 space-y-3 px-2 text-neutral-800">
        <h1 className="text-center text-4xl  text-neutral-700 font-bold ">
          Our Best sellers
        </h1>
        <p className="text-center">
          Check out some of our products with top ranked purchases from
          customers
        </p>
      </div>

      <div className="flex flex-col gap-3 h-auto w-full lg:w-[95%] xl:w-[85%] 2xl:w-[75%] md:h-[550px] lg:h-[720px] md:flex-row ">
        <div className="w-full space-y-3 md:h-full md:w-[45%]">
          <motion.div
            initial={{ rotateY: 50, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ amount: 0.4, once: true }}
            className=" aspect-square w-full md:aspect-auto md:h-[65%]"
          >
            <BestsellerCard image={statue} product={statue1p} />
          </motion.div>
          <div className="spect-video w-full md:aspect-auto md:h-[35%]">
            <BestsellerCard image={perfume} product={perfumep} />
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
            <motion.div
              initial={{ rotateY: 50, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeIn" }}
              viewport={{ amount: 0.2, once: true }}
              className="w-full h-full"
            >
              <BestsellerCard image={bgSm} product={wineCap} />
            </motion.div>
            <div className="gap-2 grid grid-rows-2 w-full h-full overflow-hidden">
              <motion.div
                initial={{ x: "20%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ amount: 0.3, once: true }}
              >
                <BestsellerCard image={cap3} product={top} />
              </motion.div>
              <motion.div
                initial={{ x: "20%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                viewport={{ amount: 0.3, once: true }}
              >
                <BestsellerCard image={statue1} product={statue2p} />
              </motion.div>
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
  const dispatch = useDispatch();
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
        style={{
          perspective: "1000px",
        }}
      />
      <span className="absolute left-2 top-2 px-3 py-0.5 text-xs outline-1 outline-gray-600/40 text-gray-50 rounded-full bg-gray-950/15 backdrop-blur-[1.5px] md:left-3 md :top-3">
        ${product.price}
      </span>
      <button className="right-2 top-1  cursor-pointer outline-1 outline-gray-600/40 bg-gray-950/15 backdrop-blur-[1.5px] rounded-full absolute md:right-3 md:top-1.5 p-1 ">
        <FontAwesomeIcon
          onClick={() => dispatch(addToCart(product))}
          className=" text-md text-gray-50 hover:text-amber-400  "
          icon={faCartShopping}
        />
      </button>
      <span className="space-y-3 text-md text-gray-50 absolute bottom-3 left-3 md:text-xl">
        <h1>{product.name}</h1>
        <Link to={`/products/${product.id}`}>
          <Button style="bg-gray-100 text-xs text-neutral-800 px-5 py-1.5 cursor-pointer hover:bg-amber-500 hover:text-white ">
            View Details{" "}
            <FontAwesomeIcon
              className="transform -rotate-45  text-md text-neutral-600 ml-1 hover:text-white  "
              icon={faArrowRight}
            />
          </Button>
        </Link>
      </span>
    </div>
  );
}
