import React from "react";
import Products from "../features/Products";
import Cart from "../features/Cart";

const Home = () => {
  return (
    <>
      <main className=" container mx-auto p-[25px] md:px-[15px] lg:py-[33px] lg:px-[99px] md:flex lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <Products />
        </section>

        <section className="mb-20 lg:mb-0">
          <Cart />
        </section>
      </main>
    </>
  );
};

export default Home;
