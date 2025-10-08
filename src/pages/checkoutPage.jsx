export default function CheckoutPage() {
  return (
    <form>
      <Inputs
        id="firstname"
        type="text"
        required
        text="Enter your first name."
      />
      <Inputs id="lastname" text="Enter your last name." />
      <Inputs id="email" type="email" text="We'll never share your email." />

      <Inputs
        id="password"
        type="password"
        required
        text="Must be at least 8 characters."
      />
      <Inputs
        id="phone number"
        type="tel"
        required
        text="Enter your phone number."
      />
      <Inputs id="address" text="Enter your address." />
    </form>
  );
}

export function Inputs({
  text,
  type = "text",
  id = "email",
  required,
  ...props
}) {
  const { formData } = useContext(Signup1Context);

  return (
    <div className="flex flex-col gap-3 ">
      <label htmlFor={id} className="text-slate-300 text-xs font-bold">
        {id.toUpperCase()} <span className="text-rose-500">*</span>
      </label>

      <input
        type={type}
        {...props}
        id={id}
        name={id}
        required={required}
        value={formData[id]}
        // onChange={(e) => handleChange(id, e.target.value)}

        className="bg-[#1b1e1d] text-slate-300 rounded-md outline-1 outline-neutral-700 px-4 py-[0.02rem]"
      />
      {/* {errors[id] && <p className="text-red-400 text-xs">{errors[id]}</p>} */}

      <a className="text-bgGreen2 text-xs cursor-pointer hover:underline underline-offset-4">
        {text}{" "}
      </a>
    </div>
  );
}
