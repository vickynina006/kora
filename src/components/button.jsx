export default function Button({
  children,
  style = "outline-1 bg-gray-800 text-white px-6 py-2 hover:bg-gray-600",
  ...props
}) {
  return (
    <button className={`  rounded-full ${style} `} {...props}>
      {children}
    </button>
  );
}
