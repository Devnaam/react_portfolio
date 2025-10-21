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

  theme ? dark() : light();

  const dispatch = useDispatch();
  const toggleThemeButton = () => {
    dispatch(toggleTheme());
  };

  return (
    <header
      className={`sticky top-0 z-50 ${
        theme ? "bg-black" : "bg-white"
      } transition-colors duration-500 shadow-md`}
    >
      <nav className="flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-2">
            <h1
              className={`text-2xl lg:text-3xl font-bold ${
                theme ? "text-white" : "text-black"
              }`}
            >
              Proups
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-lg font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-red-500"
                    : theme
                    ? "text-white hover:text-red-400"
                    : "text-black hover:text-red-500"
                } transition-colors duration-300`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-red-500"
                    : theme
                    ? "text-white hover:text-red-400"
                    : "text-black hover:text-red-500"
                } transition-colors duration-300`
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-red-500"
                    : theme
                    ? "text-white hover:text-red-400"
                    : "text-black hover:text-red-500"
                } transition-colors duration-300`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/achievements"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-red-500"
                    : theme
                    ? "text-white hover:text-red-400"
                    : "text-black hover:text-red-500"
                } transition-colors duration-300`
              }
            >
              Achievements
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-red-500"
                    : theme
                    ? "text-white hover:text-red-400"
                    : "text-black hover:text-red-500"
                } transition-colors duration-300`
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>

        {/* Desktop CTA + Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 transform hover:scale-105">
              Get Quote
            </button>
          </Link>

          <button
            onClick={toggleThemeButton}
            className={`p-2 rounded-full ${
              theme
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            } transition-all duration-300`}
          >
            {theme ? (
              <MdOutlineLightMode className="text-2xl" />
            ) : (
              <MdDarkMode className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button + Theme Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleThemeButton}
            className={`p-2 rounded-full ${
              theme
                ? "bg-gray-800 text-yellow-400"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {theme ? (
              <MdOutlineLightMode className="text-xl" />
            ) : (
              <MdDarkMode className="text-xl" />
            )}
          </button>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon className={theme ? "text-white" : "text-black"} />
          </IconButton>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            backgroundColor: theme ? "#000000" : "#ffffff",
            color: theme ? "#ffffff" : "#000000",
            width: "250px",
          },
        }}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          <Divider className={theme ? "bg-gray-700" : "bg-gray-300"} />

          <ul className="space-y-4 mt-6 text-lg font-semibold">
            <li>
              <NavLink
                to="/"
                onClick={toggleDrawer(false)}
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive
                      ? "text-red-500"
                      : theme
                      ? "text-white"
                      : "text-black"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                onClick={toggleDrawer(false)}
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive
                      ? "text-red-500"
                      : theme
                      ? "text-white"
                      : "text-black"
                  }`
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={toggleDrawer(false)}
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive
                      ? "text-red-500"
                      : theme
                      ? "text-white"
                      : "text-black"
                  }`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/achievements"
                onClick={toggleDrawer(false)}
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive
                      ? "text-red-500"
                      : theme
                      ? "text-white"
                      : "text-black"
                  }`
                }
              >
                Achievements
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                onClick={toggleDrawer(false)}
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive
                      ? "text-red-500"
                      : theme
                      ? "text-white"
                      : "text-black"
                  }`
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>

          <Divider className={`${theme ? "bg-gray-700" : "bg-gray-300"} my-6`} />

          <Link to="/contact" onClick={toggleDrawer(false)}>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300">
              Get Quote
            </button>
          </Link>
        </div>
      </Drawer>
    </header>
  );
}
