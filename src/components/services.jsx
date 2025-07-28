import { offers } from "../data/offer";
export default function Services() {
  return (
    <section className="p-10 space-y-10 lg:p-20">
      <div className="space-y-5">
        <h1 className="text-center text-4xl text-neutral-700 font-bold">
          What We Can Offer You
        </h1>
        <p className="text-center lg:px-32">
          At Kora, we ensure our customers are satified with our services, hence
          we put various actions together to enhance effective customer
          services.
        </p>
      </div>
      <div className="flex overflow-hidden">
        <div className="flex gap-8">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfferCard({ offer }) {
  return (
    <div className="py-10 px-5 w-[50%] bg-neutral-200 gap-5 flex flex-col flex-shrink-0  items-center md:w-1/3">
      {/* <span>{offer.icon}</span> */}
      <h1 className="text-center font-semibold  text-2xl">{offer.title}</h1>
      <p className="text-center">{offer.description}</p>
    </div>
  );
}
