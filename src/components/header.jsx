import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="bg-gray-950/70 px-10 py-8 backdrop-blur-md flex items-center justify-between lg:px-28">
      <h1 className="font-family-monte text-3xl font-bold text-white">kORA</h1>
      <nav>
        <ul className="hidden gap-10 font-semibold font-family-inter text-white lg:flex">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Products</Link>
          </li>
          <li>
            <a className="outline-1 outline-white rounded-full px-7 py-2">
              Buy
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-8 items-center font-semibold font-family-inter text-white ">
        <FontAwesomeIcon
          className="hidden text-xl cursor-pointer md:flex"
          icon={faMagnifyingGlass}
        />
        <FontAwesomeIcon
          className="hidden text-xl cursor-pointer md:flex"
          icon={faCartShopping}
        />
      </div>
    </header>
  );
}
