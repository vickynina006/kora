import Hero from "../components/heroSection";
import ProductDisplay from "../components/productComponent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { runSearch, setCurrentCategory } from "../reduxSlice/productSlice";

export default function Perfumes({ productRef }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentCategory("perfumes"));
    dispatch(runSearch());
    window.scrollTo(0, 0);
  }, [dispatch]);
  return (
    <>
      <Hero
        title="Perfumes"
        description="Explore our collection of luxurious perfumes. dishing out premium quality fragrances for every occasion. get ready to indulge your senses with our exquisite scents."
        offer={true}
        bgImage="bg-[url('/herobgpef2.webp')]"
      />
      <section
        ref={productRef}
        className="flex flex-col gap-14 items-center py-20 px-4"
        id="productSection"
      >
        <h1 className="text-3xl font-bold text-neutral-600 md:text-4xl">
          Our Perfumes Collection
        </h1>
        <ProductDisplay />
      </section>
    </>
  );
}
