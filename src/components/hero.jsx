export default function Hero() {
  return (
    <section className=" flex flex-col items-center gap-10 w-full  px-10 pt-36 pb-10 text-white md:px-14  lg:items-start lg:w-[70%] lg:px-28">
      <h1 className="text-6xl font-semibold text-center md:text-7xl lg:text-start">
        Pure Class Plus Luxury
      </h1>
      <strong className="text-3xl text-center font-normal lg:text-start">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eos
        aut omnis consequuntur! Tempora vitae dolores nobis ipsum nemo
      </strong>

      <a
        href=""
        className="rounded-full px-9 py-3 bg-amber-600/65 backdrop-blur-xs hover:bg-amber-700/80"
      >
        Shop now
      </a>
    </section>
  );
}
