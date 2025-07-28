export default function Button({
  children,
  style = "outline-1 bg-gray-800 text-white px-6 py-2",
  ...props
}) {
  return <button className={`  rounded-full ${style} `}>{children}</button>;
}
