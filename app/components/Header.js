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

    <div className=" bg-gradient-to-r from-gray-300 to-gray-600 m-0 p-0">

      <div className="flex justify-start">
        <img src="/TalentLogo.png" alt="Logo" className="w-1/5 mt-5 rounded-2xl" />
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