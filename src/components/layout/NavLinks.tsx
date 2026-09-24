"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  defaultClasses: string;
}

const navLinks = [
  { href: "/", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

const NavLinks = ({ defaultClasses }: NavLinksProps) => {
  const pathname = usePathname();

  const getActiveStyles = (href: string) =>
    pathname === href
      ? "bg-olive-900 text-lime-400"
      : "text-gray-400 bg-transparent hover:text-gray-300";

  return (
    <>
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`${defaultClasses} ${getActiveStyles(link.href)}`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
