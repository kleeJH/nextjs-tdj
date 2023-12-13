import Config from "@config";

import Link from "next/link";
import Image from "next/image";
import DesktopNavigation from "./desktop-nav";
import MobileNavigation from "./mobile-nav";

const Navigation = ({type = "default"} : {type?: "default" | "transparent"}) => {
  return (
    <nav className={`${type === "default" ? "bg-main" : ""} z-50 w-full flex items-center py-4 top-0`}>
      <div className="container h-fit justify-between inline-flex align-middle">
        <Link href={"/"} className="relative flex items-center gap-4">
          <Image
            src={Config.logo}
            alt="TDJ Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <p className="max-sm:hidden font-bold cursor-pointer text-lg tracking-wide pink-text-gradient">
            Tadika Desa Jaya
          </p>
          <p className="sm:hidden font-bold cursor-pointer text-lg tracking-wide pink-text-gradient">
            TDJ
          </p>
        </Link>

        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navigation;
