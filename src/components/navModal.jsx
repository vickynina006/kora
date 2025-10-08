import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

export default function NavModal({
  translate,
  onClick,
  showDetails,
  setShowDetails,
}) {
  return (
    <div
      // onClick={onClick}
      className={`fixed bg-gray-700 flex min-h-screen  flex-col z-20 gap-14 bg-darkblue2 pt-32 px-8 w-full transition-all duration-800 ease-in-out transform ${translate} top-0 right-0    mdx:hidden `}
    >
      <nav>
        <ul className="mr-10 gap-10 py-14 font-semibold font-family-inter text-lg text-neutral-50 flex flex-col items-center">
          <li onClick={onClick} className="hover:text-amber-400/85">
            <Link to="/">Home</Link>
          </li>
          <li onClick={onClick} className="hover:text-amber-400/85">
            <a href="#footer">About</a>
          </li>

          <li className=" hover:text-amber-400/85">
            <Link onClick={() => setShowDetails((prev) => !prev)}>
              Products
            </Link>
            <AnimatePresence>
              {showDetails && (
                <motion.ul
                  onClick={onClick}
                  initial={{ height: 0 }}
                  animate={{ height: showDetails && 150 }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`overflow-hidden rounded-md p-3 text-sm flex flex-col  gap-1 text-neutral-200 smx:gap-5`}
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
              )}
            </AnimatePresence>
          </li>

          <li onClick={onClick}>
            <a
              href="#productSection"
              className="outline-1 outline-neutral-50 rounded-full px-7 py-2 hover:text-amber-400/85 hover:outline-amber-400/85"
            >
              Buy
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
