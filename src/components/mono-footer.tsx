"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { href: "https://linkedin.com/in/mattwilder1", label: "LINKEDIN" },
  { href: "https://github.com/mattbrc", label: "GITHUB" },
  { href: "https://instagram.com/acidgambit", label: "INSTAGRAM" },
  { href: "https://x.com/acidgambit_", label: "X" },
];

export default function MonoFooter() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 items-center z-50 border-neutral-950 bg-[#EEE7E3] font-mono pb-8">
      <div className="flex h-8 items-center justify-center gap-1 px-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex h-6 items-center border border-transparent px-3 text-sm transition-colors hover:bg-gray-800 hover:text-white ${
              pathname === item.href ? "border-neutral-950 bg-neutral-100" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
