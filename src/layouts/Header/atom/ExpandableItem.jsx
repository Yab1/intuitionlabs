import { Fragment } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { HorizontalLine } from "@/atom";
import { toggleExpansion } from "@/layouts/Header/slice";

function ExpandableItem() {
  const psData = useSelector((state) => state.psData);
  const dispatch = useDispatch();

  return (
    <Fragment>
      {psData.map(({ title, isExpanded, subItems }, index) => (
        <ul key={index} className="text-white">
          <HorizontalLine />
          <li className="font-noto-serif-jp text-lg font-light py-5">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => dispatch(toggleExpansion(title))}
            >
              {title}
              {isExpanded ? (
                <AiOutlineMinus className="mr-3" />
              ) : (
                <AiOutlinePlus className="mr-3" />
              )}
            </button>
          </li>
          {isExpanded &&
            subItems.map(({ title, description, link }, index) => (
              <a
                key={index}
                href={link}
                className="block py-4 font-gothic-a1 text-sm"
              >
                <h6 className="mb-2 flex items-center justify-between mr-3">
                  {title} <MdArrowForwardIos className="opacity-60" />
                </h6>
                <p className="opacity-60">{description}</p>
              </a>
            ))}
        </ul>
      ))}
    </Fragment>
  );
}

ExpandableItem.displayName = "/src/layouts/Header/atom/ExpandableItem.jsx";

export default ExpandableItem;
