import Bestsellers from "../components/bestSellers";
import Cart from "../components/cart";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/heroSection";
import ProductSection from "../components/productSection";
import Services from "../components/services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductSection />
      <Bestsellers />
      <Services />
      <Footer />
      <Cart />
    </>
  );
}
