"use client";

import { useDispatch } from "react-redux";
import { changeMode } from "../features/theme/themeSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

import { usePathname, useRouter } from "next/navigation";

import {
  HomeIcon,
  StarIcon,
  HeartIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const navItems = [
  {
    label: "Feed",
    path: "/dashboard/feed",
    icon: <HomeIcon className="w-5 h-5 mr-2"></HomeIcon>,
  },
  {
    label: "Trending",
    path: "/dashboard/trending",
    icon: <StarIcon className="w-5 h-5 mr-2"></StarIcon>,
  },
  {
    label: "Favourites",
    path: "/dashboard/Favorites",
    icon: <HeartIcon className="w-5 h-5 mr-2"></HeartIcon>,
  },
  {
    label: "Settings",
    path: "/dashboard/settings",
    icon: <Cog6ToothIcon className="w-5 h-5 mr-2"></Cog6ToothIcon>,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        Menu
      </button>
      <aside
        className={`bg-gray-900 h-screen w-[250px] flex flex-col text-white fixed transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 dark:bg-gray-100 dark:text-gray-900`}
      >
        <div className="p-4 font-bold border-b border-gray-800">
          MyDashboard
        </div>

        <nav className="mt-4 flex-1">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`block px-4 py-2 rounded transition-colors 
            ${
              pathname === item.path
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`}
              aria-current={pathname === item.path ? "page" : undefined}
            >
              <span className="flex items-center">
                {item.icon}
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">Settings</div>
        <div className="p-4 border-t border-gray-800 flex items-center gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/583231?v=4"
            className="w-10 h-10 rounded-full"
            alt="Avatar"
          />
          <span>Username</span>
        </div>
      </aside>
    </div>
  );
}
