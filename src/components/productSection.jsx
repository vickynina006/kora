import { Link, NavLink } from "react-router-dom";

// import image from "../assets/1.jpg";

import Button from "./button";
import ProductDisplay from "./productComponent";

export default function ProductSection({ productRef }) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setCurrentCategory("caps"));
  //   dispatch(runSearch());
  // }, [dispatch]);

  return (
    <section
      ref={productRef}
      className="flex flex-col gap-14 items-center py-14 px-4  "
      id="productSection"
    >
      <ul className="flex flex-wrap gap-6">
        <ProductButton title="All" to="/" bg="bg-gray-800 text-white" />
        <ProductButton title="Best Sellers" to="/#bestsellers" />
        <ProductButton title="Caps" to="/caps" bg="" />
        <ProductButton title="Perfumes" to="/perfumes" bg="" />
        <ProductButton title="Interiors" to="/interiors" bg="" />
      </ul>
      <ProductDisplay limit={6} />
      <Button>See More Collection</Button>
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
