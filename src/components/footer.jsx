import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex flex-col w-full px-10 py-20 gap-10 bg-gray-800 text-gray-100 lg:px-20 md:flex-row"
    >
      <div className="flex flex-col gap-10 w-full md:w-[55%] md:flex-row">
        <div className="w-full space-y-5 md:w-[60%]">
          <h1 className="text-3xl font-family-monte font-bold md:text-4xl">
            kORA
          </h1>
          <p className="text-md md:pr-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            aspernatur eveniet porro ipsa ipsam. Accusamus veritatis iusto
            architecto, earum!
          </p>
          <ul className="flex gap-4">
            <Icons icon={faXTwitter} />
            <Icons icon={faWhatsapp} />
            <Icons icon={faTelegram} />
            <Icons icon={faInstagram} />
            <Icons icon={faEnvelope} />
          </ul>
        </div>
        <div className="w-full md:w-[40%]  space-y-5">
          <h1 className="text-gray-300">Quick Links</h1>
          <ul className="space-y-4">
            <li className="hover:text-gray-300">
              <a href="">Home</a>
            </li>
            <li className="hover:text-gray-300">
              <a href="">About</a>
            </li>
            <li className="hover:text-gray-300">
              <a href="">Services</a>
            </li>
            <li className="hover:text-gray-300">
              <a href="">Message us on Whatsapp</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-10 w-full md:w-[45%] md:flex-row">
        <div className="w-full space-y-5  md:w-[45%] ">
          <h1 className="text-gray-300 ">Shop Now</h1>
          <ul className="space-y-4">
            <li className="hover:text-gray-300">
              <a href="">Best Sellers</a>
            </li>
            <li className="hover:text-gray-300">
              <a href="">Caps</a>
            </li>
            <li className="hover:text-gray-300">
              <a href="">Perfumes</a>
            </li>
            <li className="hover:text-gray-300">
              <a href="">Interiors</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[55%] space-y-5 ">
          <h1 className="text-gray-300 ">Reach Us</h1>
          <p>
            <span className="">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>{" "}
            No 123 road 7, Mandela estate, Sars road, Port Harcourt, Nigeria.
          </p>
          <p>
            <span className="">
              <FontAwesomeIcon icon={faPhone} />
            </span>{" "}
            +234 703 116 018
          </p>
          <p className="">
            <span className="">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>{" "}
            darlingtonnw <br className=" flex smx:hidden" />
            ankwo@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
export function Icons({ icon }) {
  return (
    <li>
      <a href="">
        <FontAwesomeIcon
          className=" text-lg  cursor-pointer text-gray-100 hover:text-amber-500"
          icon={icon}
        />
      </a>
    </li>
  );
}
