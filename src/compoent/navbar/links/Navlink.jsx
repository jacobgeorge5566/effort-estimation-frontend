"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = (props) => {
  const pathname = usePathname();
  return (
    <Link
      href={props.item.path}
      className={`${
        pathname === props.item.path
          ? " text-black bg-white px-2 py-1 rounded-lg text-center"
          : ""
      }`}
      key={props.item.title}
    >
      {props.item.title}{" "}
    </Link>
  );
};

export default Navlink;
