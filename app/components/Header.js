"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  const navItems = [
    { label: "Movie List", href: "/" },
    { label: "About", href: "/about" },
  ];
  return (

    <div className=" bg-gradient-to-r from-red-700 to-orange-400 m-auto">

      <div className="flex justify-center">
        <img src="/Movie-Hub.png" alt="Logo" className="mt-5 rounded-2xl" />
      </div>
      <div className="flex justify-center">
        <ul className="flex gap-5 p-10">
          {navItems.map((link, index) => (

            <li key={index}>
              <Link
                href={link.href}
                className={
                  pathname === `${link.href}` ? "text-gray-700 bg-white hover:bg-gray-300 font-bold p-2 rounded-xl justify-center items-center" : "text-white hover:bg-gray-300 hover:text-gray-700 font-bold p-2 rounded-xl"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Header;