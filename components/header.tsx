import Link from "next/link";
import HamburgerNav from "./headerHamNav";

export default function Header() {
  return (
    <>
      <nav className="nav hidden sm:flex justify-around h-[17vh] p-4 items-center border-b-2 ">
        <div className="logo text-[2rem] cursor-default">Muh Okta Rifando</div>
        <div>
          <ul className="nav-links flex gap-8 list-none text-2xl">
            <li className="hover:text-gray-400 hover:underline hover:underline-offset-4 decoration-[#b5b5b5]">
              <Link href="#about">About</Link>
            </li>
            <li className="hover:text-gray-400 hover:underline hover:underline-offset-4 decoration-[#b5b5b5]">
              <Link href="#experience">Experience</Link>
            </li>
            <li className="hover:text-gray-400 hover:underline hover:underline-offset-4 decoration-[#b5b5b5]">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="hover:text-gray-400 hover:underline hover:underline-offset-4 decoration-[#b5b5b5]">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
