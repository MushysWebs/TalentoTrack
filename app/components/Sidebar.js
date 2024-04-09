"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  
  const navItems = [
    { label: "Employee's", href: "/" },
    { label: "Admin", href: "/about" },
    { label: "Login", href: "/login" },
    // Add more navigation items here
  ];

  return (
    <aside className="w-40 min-h-screen bg-gray-800 p-5">
      <nav>
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index} className="hover:bg-gray-700 p-2 rounded">
              <Link href={item.href}>
                <div
                  className={
                    pathname === item.href ? "text-gray-700 bg-white hover:bg-gray-300 font-bold p-2 rounded-xl" : "text-white hover:bg-gray-300 hover:text-gray-700 font-bold p-2 rounded-xl"
                  }
                >
                  {item.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
