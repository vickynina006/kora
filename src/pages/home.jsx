import { useOutletContext } from "react-router-dom";
import Bestsellers from "../components/bestSellers";

import Hero from "../components/heroSection";
import ProductSection from "../components/productSection";
import Services from "../components/services";

export default function Home() {
  const { productRef } = useOutletContext();
  return (
    <>
      <Hero
        title="Where Scent, Style, and Space Meet Elegance"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eos
          aut omnis consequuntur! Tempora vitae dolores nobis ipsum nemo"
        button={true}
      />
      <ProductSection productRef={productRef} />
      <Bestsellers />
      <Services />
    </>
  );
}
