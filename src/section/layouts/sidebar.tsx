"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";
import { socialIcons } from "@/constants";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  const links = [
    { title: "Stake", url: "/", icon: "/images/layouts/stake.svg" },
    { title: "Bridge", url: "/bridge", icon: "/images/layouts/bridge.svg" },
    {
      title: "Transfer",
      url: "/transfer",
      icon: "/images/layouts/transfer.svg",
    },
    {
      title: "Governance",
      url: "/governance",
      icon: "/images/layouts/governance.svg",
    },
  ];

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen border-r border-graydark dark:border-gray2 drop-shadow-1 dark:drop-shadow-none w-65 flex-col overflow-y-hidden bg-white duration-200 ease-in-out dark:bg-gray lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex items-center justify-center p-5.5 gap-4">
        <Link href="/">
          <Image
            width={176}
            height={32}
            src={"/images/logo/logo.svg"}
            alt="Logo"
            className="w-44 h-8"
            style={{
              filter: theme === "dark" ? "" : "brightness(0) saturate(100%)",
            }}
          />
        </Link>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear justify-between h-full">
        <ul className="flex flex-col">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-graydark dark:hover:bg-gray2 ${
                  pathname === link.url &&
                  "bg-graydark dark:bg-gray2 dark:text-yellow"
                }`}
              >
                <Image
                  src={link.icon}
                  alt={link.title}
                  className="w-5.5 h-5.5"
                  width={17}
                  height={17}
                  style={{
                    filter:
                      theme === "dark"
                        ? pathname === link.url
                          ? ""
                          : "grayscale(100%) brightness(90%)"
                        : "brightness(0) saturate(100%)",
                  }}
                />
                <span className="text-sm">{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row justify-around p-5">
          {socialIcons.map((icon, index) => (
            <Link href={icon.url} key={index}>
              <Image
                src={icon.icon}
                alt={icon.title}
                className="w-6 h-6"
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
