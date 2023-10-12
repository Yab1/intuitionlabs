import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { ExpandableItem } from "@/layouts/Header/atom";
import { HorizontalLine } from "@/atom";
import { primaryRoutes } from "@/route";

function Menu() {
  return (
    <div className="bg-dark-gray absolute inset-0 top-14 pt-5 px-5 h-full">
      <ExpandableItem />
      <HorizontalLine />
      <nav className="text-white font-noto-serif-jp text-lg font-light">
        <ul>
          {primaryRoutes.map(({ name, path }) => (
            <Fragment key={name}>
              <li className="py-5">
                <NavLink to={`/intuitionlabs/${path}`}>
                  <button className="w-full text-start">{name}</button>
                </NavLink>
              </li>
              <HorizontalLine />
            </Fragment>
          ))}
        </ul>
      </nav>
      <button className="bg-intense-red pt-10 pb-5 w-full font-jetBrains-mono text-xs text-white font-light uppercase flex items-end justify-between px-5 rounded mt-5">
        Chat with us
        <IoMdArrowForward className="font-light text-sm" />
      </button>
    </div>
  );
}

Menu.displayName = "/src/layouts/Header/widgets/Menu.jsx";

export default Menu;
