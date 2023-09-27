import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Dropdown = ({ items }) => {
  console.log("Items: ", items);
  return (
    <ul className="absolute top-10 left-1/2 -translate-x-1/2 w-full bg-white flex flex-wrap pt-5 px-5 z-50">
      {items.map((item, idx) => {
        return (
          <li
            key={idx}
            className="w-1/2 relative flex  items-center gap-1 pt-5 md:pt-0 text-black pb-3"
          >
            <Icon icon={item.icon} />

            <Link href={item.url || "#"} className="pl-2 md:pl-0">
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
