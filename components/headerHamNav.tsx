import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HamburgerNav({ className }: { className: string }) {
  return (
    <div className={cn(className, "hamburger-nav")}>
      <div className="logo">Hamburger</div>
      <div className="hamburger-menu">
        <div className="hamburger-icon flex flex-col justify-between h-24 w-30 cursor-pointer">
          <span className="w-full h-[2px] bg-black transition-all duration-300 ease-in-out"></span>
          <span></span>
          <span></span>
        </div>
        <div className="menu-link absolute top-[100%] right-0 bg-white w-fit max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact"></Link>Contact
          </li>
        </div>
      </div>
    </div>
  );
}
