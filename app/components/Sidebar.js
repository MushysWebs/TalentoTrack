"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

const Sidebar = () => {
  const pathname = usePathname();
  const { status, data: session } = useSession();

  const handleSignOut = () => {
    signOut();
  };

  const navItems = [
    { label: "Employee", href: "/" },
    { label: "Admin", href: "/admin" },
    { label: "About", href: "/about"},
    { label: status === 'authenticated' ? 'Sign Out' : 'Login', href: status === 'authenticated' ? null : '/login', onClick: status === 'authenticated' ? handleSignOut : null },
    // Add more navigation items here
  ];

  return (
    <aside className="w-40 min-h-screen bg-gray-800 p-5">
      <nav>
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            // Render item only if the href is not null
            item.href && (
              <li key={index} className="p-2 rounded">
                <Link href={item.href}>
                  <div
                    className={
                      pathname === item.href ? "text-gray-700 bg-white hover:bg-gray-300 font-bold p-2 rounded-xl" : "text-white hover:bg-gray-300 hover:text-gray-700 font-bold p-2 rounded-xl"
                    }
                    onClick={item.onClick}
                  >
                    {item.label}
                  </div>
                </Link>
              </li>
            )
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
