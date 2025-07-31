import { useEffect, useRef } from "react";
import { offers } from "../data/offer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let speed = 1;
    let animationId;
    const singleWidth = container.scrollWidth / 2;
    function scroll() {
      container.scrollLeft += speed;
      if (container.scrollLeft >= singleWidth) {
        container.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(scroll);
    }
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);
  const doubledOffers = [...offers, ...offers];
  return (
    <section className="px-6 py-20 space-y-10 lg:p-20">
      <div className="space-y-5">
        <h1 className="text-center text-3xl text-neutral-700 font-bold md:text-4xl">
          What We Can Offer You
        </h1>
        <p className="text-center lg:px-32">
          At Kora, we ensure our customers are satified with our services, hence
          we put various actions together to enhance effective customer
          services.
        </p>
      </div>
      <div className="flex w-full overflow-hidden " ref={containerRef}>
        <div className="flex gap-[4%] flex-none w-full md:gap-[2%]">
          {doubledOffers.map((offer, i) => (
            <OfferCard key={i} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfferCard({ offer }) {
  return (
    <div className="py-10 px-6 w-[96%] smx:w-[48%]  bg-neutral-100 gap-5 rounded-lg flex flex-col flex-shrink-0 justify-center lg:px-10 lg:py-14  items-center md:w-[32%]">
      <FontAwesomeIcon icon={offer.icon} className="text-gray-500 text-3xl" />
      <h1 className="text-center text-lg font-semibold  md:text-2xl">
        {offer.title}
      </h1>
      <p className="text-center hidden lg:flex">{offer.description}</p>
    </div>
  );
}
