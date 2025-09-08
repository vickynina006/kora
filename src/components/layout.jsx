import Header from "./header";
import Footer from "./footer";
import Cart from "./cart";
import { useRef } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const productRef = useRef(null);
  function scrollToProducts() {
    productRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <Header scrollToProducts={scrollToProducts} />
      <main>
        <Outlet context={{ productRef }} />
      </main>
      <Footer />
      <Cart />
    </>
  );
}
