"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 relative bg-blue-950">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image src="/LOGO.png" alt="Logo" width={90} height={90} />
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-yellow-500 absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        AQARAQ عقارك
      </h1>

      {/* Buttons */}
      <div className="flex space-x-2">
        <Link href="/register">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-600">
            تسجيل جديد
          </button>
        </Link>
        <Link href="/login">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-600">
            تسجيل الدخول
          </button>
        </Link>
      </div>
    </header>
  );
}
