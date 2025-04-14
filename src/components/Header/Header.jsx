import * as React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { Divider } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../features/themeChanger/themeChanger";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  const theme = useSelector((state) => state.themeChanger.value);

  const dark = () => {
    document.querySelector("body").setAttribute("class", "dark");
  };
  const light = () => {
    document.querySelector("body").setAttribute("class", "light");
  };

  {
    theme ? dark() : light();
  }

  const dispatch = useDispatch();

  const toggleThemeButton = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className={`shadow sticky z-50 top-0 `}>
      <nav
        className={`border-gray-200 px-4 lg:px-6 py-2.5 ${
          theme ? "bg-[#1A1A1A]" : "bg-gray-100 "
        } rounded-xl`}
      >
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div>
            <Link to="/">
              <span className={`${theme ? "text-white" : "text-black"}`}>
                Proups
              </span>
            </Link>
          </div>

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto">
            <ul className="flex mt-4 font-medium lg:space-x-6 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-green-800"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-green-800"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-green-800"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-green-800"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/achievements"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-green-800"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Achievements
                </NavLink>
              </li>
              <li>
                <button onClick={toggleThemeButton}>
                  {theme ? (
                    <MdOutlineLightMode size={30} className="text-white" />
                  ) : (
                    <MdDarkMode size={30} />
                  )}
                </button>
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{ color: theme ? "white" : "black" }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer(false)}
          sx={{
            width: 250,
            "& .MuiDrawer-paper": {
              backgroundColor: theme ? "black" : "white", 
              color: theme ? "white" : "black", 
            },
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <div
            className="flex flex-col h-full w-full p-4 "
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <button onClick={toggleThemeButton} className="text-center m-4">
              {theme ? (
                <MdOutlineLightMode size={30} className="text-white" />
              ) : (
                <MdDarkMode size={30} />
              )}
            </button>
            <Divider
              sx={{
                borderBottomWidth: 3,
                borderColor: theme ? "white" : "black",
                fontWeight: "bold",
              }}
            />
            <nav className="space-y-4 flex flex-col mt-6">
              <Link
                to="/"
                className={`block text-xl hover:text-white  text-center hover:bg-gray-700 rounded-full py-2 px-4 border ${theme ? "border-white" : "border-black"}`}
              >
                Home
              </Link>

              <Link
                to="/skills"
                className={`block text-xl hover:text-white text-center hover:bg-gray-700 rounded-full py-2 px-4 border ${theme ? "border-white" : "border-black"}`}
              >
                Skills
              </Link>

              <Link
                to="/projects"
                className={`block text-xl hover:text-white text-center hover:bg-gray-700 rounded-full py-2 px-4 border ${theme ? "border-white" : "border-black"}`}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className={`block text-xl hover:text-white text-center hover:bg-gray-700 rounded-full py-2 px-4 border ${theme ? "border-white" : "border-black"}`}
              >
                Contact me
              </Link>
              <Link
                to="/achievements"
                className={`block text-xl hover:text-white text-center hover:bg-gray-700 rounded-full py-2 px-4 border ${theme ? "border-white" : "border-black"}`}
              >
                Achievements
              </Link>
            </nav>
          </div>
        </Drawer>
      </nav>
    </header>
  );
}
