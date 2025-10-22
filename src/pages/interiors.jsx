import Hero from "../components/heroSection";
import ProductDisplay from "../components/productComponent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { runSearch, setCurrentCategory } from "../reduxSlice/productSlice";

export default function Interiors({ productRef }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentCategory("interiors"));
    dispatch(runSearch());
    window.scrollTo(0, 0);
  }, [dispatch]);
  return (
    <>
      <Hero
        title="Interiors"
        description="Explore our collection of stylish interiors. Make your space a reflection of your personality with our unique designs."
        offer={true}
        bgImage="bg-[url('/herobgint.webp')]"
      />
      <section
        ref={productRef}
        className="flex flex-col gap-14 items-center py-20 px-4"
        id="productSection"
      >
        <h1 className="text-3xl font-bold text-neutral-600 md:text-4xl">
          Our Interiors Collection
        </h1>
        <ProductDisplay />
      </section>
    </>
  );
}
