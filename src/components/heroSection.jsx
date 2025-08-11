export default function Hero() {
  return (
    <section className="bg-black/30 bg-blend-overlay  bg-[url('/bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className=" flex flex-col items-center gap-10 w-full  px-6 pt-52 pb-10 text-neutral-50 md:px-14  lg:items-start md:pt-60 lg:w-[70%] lg:px-28">
        <h1 className="text-4xl font-semibold text-center md:text-[3.5rem] lg:text-start">
          Where Scent, Style, and Space Meet Elegance
        </h1>
        <strong className="text-2xl text-center font-normal lg:text-start">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eos
          aut omnis consequuntur! Tempora vitae dolores nobis ipsum nemo
        </strong>

        <a
          href=""
          className="rounded-full px-9 py-3 bg-amber-600/65 backdrop-blur-xs hover:bg-amber-700/80"
        >
          Shop now
        </a>
      </div>
    </section>
  );
}
