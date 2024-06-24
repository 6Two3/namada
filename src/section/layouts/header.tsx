import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import ThemeButton from "@/components/theme-button";
import Breadcrumb from "@/components/breadcrumb";
import { usePathname } from "next/navigation";
import ConnectWallet from "@/components/connect-wallet";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const pageName = pathname.startsWith("/") ? pathname.substring(1) : pathname;
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-gray dark:border-b dark:border-b-gray2 dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-5 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black duration-200 ease-in-out dark:bg-graydark ${
                    !props.sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-graydark ${
                    !props.sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-graydark ${
                    !props.sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-graydark ${
                    !props.sidebarOpen && "!h-0"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-graydark ${
                    !props.sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={32}
              height={32}
              src={"/images/layouts/chain.svg"}
              alt="Logo"
              className="w-9"
              style={{
                filter: theme === "dark" ? "" : "brightness(0) saturate(100%)",
              }}
            />
          </Link>
        </div>
        <div className="flex gap-3 2xsm:gap-7 w-full lg:justify-between justify-end items-center">
          <Breadcrumb pageName={pageName === "" ? "stake" : pageName} />
          <div className="flex flex-row gap-10">
            <ConnectWallet />
            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
