import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
// import { useSelector } from "react-redux";
import { toggleShowCart } from "../reduxSlice/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, runSearch } from "../reduxSlice/productSlice";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Details } from "./heroSection";
import NavModal from "./navModal";

export default function Header({ scrollToProducts }) {
  const [openSearch, setOpenSearch] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const totalQty = useSelector((state) => state.cart.totalQty);
  const dispatch = useDispatch();

  function toggleMenu() {
    setMenuIsOpen((prev) => !prev);
  }

  function handleChange(e) {
    const value = e.target.value;
    dispatch(setSearchTerm(value));
    if (value.trim() === "") {
      dispatch(runSearch());
    }
  }
  function handleSearchClick() {
    dispatch(runSearch());
    scrollToProducts?.();
  }
  function handleToggleCart() {
    dispatch(toggleShowCart());
  }

  useEffect(() => {
    function handleHeaderScroll() {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 20);
      setLastScrollY(currentScrollY);
    }
    window.addEventListener("scroll", handleHeaderScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleHeaderScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className="w-full fixed top-0 right-0 left-0 z-30">
        <header
          className={` bg-gray-950/70 px-3  py-5 backdrop-blur-md flex items-center justify-between transition-all duration-600 smx:px-6 md:py-8 md:px-10 lg:px-28 ${
            isHeaderVisible ? "-translate-y-0" : "-translate-y-full"
          }`}
        >
          <button onClick={toggleMenu} className="flex lg:hidden  z-50 ">
            {" "}
            <FontAwesomeIcon
              className=" text-xl  text-white cursor-pointer hover:text-amber-400/85 "
              icon={menuIsOpen ? faTimes : faBars}
            />
          </button>

          <h1 className="font-family-monte text-2xl mx-auto font-bold text-neutral-50 md:text-3xl lg:mx-0">
            kORA
          </h1>
          <nav>
            <ul className="hidden gap-10 font-semibold font-family-inter text-neutral-50 lg:flex">
              <li className="hover:text-amber-400/85">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-amber-400/85">
                <a href="#footer">About</a>
              </li>

              <li className="relative  hover:text-amber-400/85">
                <Link onClick={() => setShowDetails((prev) => !prev)}>
                  Products
                </Link>
                <AnimatePresence>
                  {" "}
                  {showDetails && (
                    <Details
                      style="mt-10 bg-white/10 left-1/2 top-full -translate-x-1/2 z-30"
                      onClick={() => setShowDetails(false)}
                    />
                  )}
                </AnimatePresence>
              </li>

              <li>
                <a
                  href="#productSection"
                  className="outline-1 outline-neutral-50 rounded-full px-7 py-2 hover:text-amber-400/85 hover:outline-amber-400/85"
                >
                  Buy
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex gap-4 items-center font-semibold font-family-inter text-neutral-50 lg:gap-7 ">
            <FontAwesomeIcon
              onClick={() => setOpenSearch((prev) => !prev)}
              className=" text-xl cursor-pointer hover:text-amber-400/85 "
              icon={openSearch ? faTimes : faMagnifyingGlass}
            />

            <div className="relative " onClick={handleToggleCart}>
              <FontAwesomeIcon
                className=" text-xl cursor-pointer hover:text-amber-400/85"
                icon={faCartShopping}
              />
              <span className="px-0.5 text-xs flex items-center justify-center min-w-4 min-h-4 z-10 text-neutral-50 bg-amber-600 rounded-full absolute -top-2 -right-1.5 ">
                {totalQty > 9 ? "9+" : totalQty}
              </span>
            </div>
          </div>
        </header>
        {/* mobile nav details */}

        <AnimatePresence>
          {openSearch && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="w-full px-5 py-3 bg-white shadow-md flex items-center justify-center lg:px-20 md:py-5"
            >
              <div className="w-full relative">
                {" "}
                <input
                  onChange={handleChange}
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    (dispatch(runSearch()), scrollToProducts?.())
                  }
                  type="text"
                  placeholder="Search products..."
                  className="  w-full border-none outline  outline-gray-400 rounded-full px-4 py-1.5 md:py-3"
                />
                <button
                  onClick={handleSearchClick}
                  className=" absolute right-2 top-1.5 flex items-center justify-center bg-gray-900 text-white rounded-full p-1.5 md:p-2 "
                >
                  <FontAwesomeIcon
                    className="text-sm cursor-pointer hover:text-gray-300 md:text-xl"
                    icon={faMagnifyingGlass}
                  />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <NavModal
        showDetails={showDetails}
        setShowDetails={setShowDetails}
        onClick={toggleMenu}
        translate={menuIsOpen ? "translate-x-0" : "-translate-x-full"}
      />
    </>
  );
}
