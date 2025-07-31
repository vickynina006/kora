import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFedex } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarCheck,
  faHeadset,
  faRotateLeft,
  faShieldHalved,
  faShippingFast,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

export const offers = [
  {
    id: 1,
    title: "Fast Shipping",
    description:
      "Get your orders delivered quickly with no extra shipping fees on all items.",
    icon: faTruckFast,
  },
  {
    id: 2,
    title: "Secure Payment",
    description: "We use encryption to protect your data and transactions.",
    icon: faShieldHalved,
  },
  {
    id: 3,
    title: "Easy Returns",
    description:
      "Return products easily within 14 days if you're not satisfied.",
    icon: faRotateLeft,
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "We're always here to help, anytime you need us.",
    icon: faHeadset,
  },
  {
    id: 5,
    title: "Reliable Scheduling",
    description: "We value your time with flexible scheduling options.",
    icon: faCalendarCheck,
  },
];
