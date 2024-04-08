"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {

  return (

    <div className=" bg-gradient-to-r from-gray-300 to-gray-600 m-0 p-0">

      <div className="flex justify-start">
        <img src="/TalentLogo.png" alt="Logo" className="w-1/5 mt-2 mb-2 ml-2 rounded-2xl" />
      </div>
      <div className="flex justify-center">
       
      </div>

    </div>
  );
};

export default Header;