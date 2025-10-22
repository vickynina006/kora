import Hero from "../components/heroSection";
import ProductDisplay from "../components/productComponent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { runSearch, setCurrentCategory } from "../reduxSlice/productSlice";

export default function Caps({ productRef }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentCategory("caps"));
    dispatch(runSearch());
    window.scrollTo(0, 0);
  }, [dispatch]);
  return (
    <>
      <Hero
        title="Caps Collection"
        description="Explore our collection of stylish caps. quality meets comfort in our diverse range of caps designed for every occasion."
        offer={true}
        bgImage="bg-[url('/hero-bg.webp')]"
      />
      <section
        ref={productRef}
        className="flex flex-col gap-14 items-center py-20 px-4"
        id="productSection"
      >
        <h1 className="text-3xl font-bold text-neutral-600 md:text-4xl">
          Our Caps Collection
        </h1>
        <ProductDisplay />
      </section>
    </>
  );
}
