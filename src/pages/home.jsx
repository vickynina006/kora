import Bestsellers from "../components/bestSellers";
import HeaderHeroBg from "../components/headerHeroBg";
import ProductSection from "../components/productSection";
import Services from "../components/services";

export default function Home() {
  return (
    <>
      <HeaderHeroBg />
      <ProductSection />
      <Bestsellers />
      <Services />
    </>
  );
}
