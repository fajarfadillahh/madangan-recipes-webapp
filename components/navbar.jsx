import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [stickyNavbar, setStickyNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 5 ? setStickyNavbar(true) : setStickyNavbar(false);
    });
  });

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 mx-auto max-w-[1440px] ${
        stickyNavbar ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center">
        <Link href="/" className="inline-flex items-center gap-1">
          <div className="text-xl">🥗</div>
          <p className="text-[18px] font-black text-gray-900">
            Madangan<span className="text-green-500">.</span>
          </p>
        </Link>
      </div>
    </nav>
  );
}
