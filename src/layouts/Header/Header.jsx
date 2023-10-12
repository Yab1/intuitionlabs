import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { Menu } from "@/layouts/Header/widgets";
import { toggleMenu } from "@/slices";

function Header() {
  const { isMenuOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <header
        className={
          "p-5 flex items-center " +
          (isMenuOpen
            ? "gap-2 bg-dark-gray text-white"
            : "p-5 flex justify-between items-center shadow-xl")
        }
      >
        {isMenuOpen ? (
          <Fragment>
            <button onClick={() => dispatch(toggleMenu())}>
              <IoCloseOutline size={25} />
            </button>
            <p className="font-jetBrains-mono font-light text-xs ">Close</p>
          </Fragment>
        ) : (
          <Fragment>
            <button
              className="relative before:w-6 before:h-px before:absolute before:bg-dark-gray before:left-0 before:right-0 before:top-0 after:w-6 after:h-px after:absolute after:bg-dark-gray after:left-0 after:right-0 after:bottom-0 h-2"
              onClick={() => dispatch(toggleMenu())}
            ></button>
            <p className="font-gothic-a1 font-semibold text-sm text-dark-gray tracking-widest">
              intuitionlabs
            </p>
            <button>
              <IoSearchOutline />
            </button>
          </Fragment>
        )}
      </header>
      {isMenuOpen ? <Menu /> : null}
    </Fragment>
  );
}

Header.displayName = "/src/layouts/Header.jsx";

export default Header;
