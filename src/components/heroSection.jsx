import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

export default function Hero({
  button,
  title,
  description,
  bgImage = "bg-[url('/herobg3.jpg')]",
  offer,
}) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <section
      className={`bg-black/35 bg-blend-overlay  ${bgImage} bg-cover bg-no-repeat bg-center`}
    >
      <div className=" flex flex-col items-center gap-10 w-full  px-6 pt-52 pb-24 overflow-hidden text-white md:px-14  lg:items-start md:pt-60 lg:w-[70%] lg:px-28">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="text-4xl font-semibold text-center md:text-[3.5rem] lg:text-start"
          >
            {title}
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.5,
            }}
            className="text-2xl text-center font-normal lg:text-start"
          >
            {description}
          </motion.p>
        </div>

        {button && (
          <div className="relative flex flex-col gap-5 items-center lg:items-start">
            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 8 }}
              onClick={() => setShowDetails((prev) => !prev)}
              className="rounded-full px-8 py-2.5 cursor-pointer bg-amber-600/65 backdrop-blur-xs  hover:bg-amber-700/80 "
            >
              Shop now
            </motion.button>
            <AnimatePresence> {showDetails && <Details />}</AnimatePresence>
          </div>
        )}
        {offer && (
          <div className="bg-white/10 backdrop-blur-sm rounded-md outline-1 outline-white/20 px-6 py-2 text-sm  text-neutral-200 ">
            <p>Get 15% off on purchases over $100</p>
          </div>
        )}
      </div>
    </section>
  );
}

export function Details({ style = "mt-14 bg-white/10", ...props }) {
  return (
    <motion.ul
      {...props}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.3, ease: easeInOut }}
      className={`absolute  ${style} backdrop-blur-sm rounded-md p-3 text-sm flex  gap-1 text-neutral-200 smx:gap-5`}
    >
      <li className=" outline-1 outline-white/15  rounded-full px-2 py-1 hover:text-neutral-300">
        <Link to="/caps">Caps</Link>
      </li>
      <li className=" outline-1 outline-white/15  rounded-full px-2 py-1 hover:text-neutral-300">
        <Link to="/interiors">Interiors</Link>
      </li>
      <li className=" outline-1 outline-white/15  rounded-full px-2 py-1 hover:text-neutral-300">
        <Link to="/perfumes">Perfumes</Link>
      </li>
    </motion.ul>
  );
}
