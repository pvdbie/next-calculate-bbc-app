import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="w-full flex justify-center p-5 bg-amber-400 gap-5 text-blue-400">
        <Link href="/" className="text-white hover:text-emerald-500">
          หน้าหลัก
        </Link>
        l
        <Link href="/bmi" className="text-white hover:text-emerald-500">
          หน้า Bmi
        </Link>
        l
        <Link href="/bmr" className="text-white hover:text-emerald-500">
          หน้า Bmr
        </Link>
        l
        <Link href="/caar" className="text-white hover:text-emerald-500">
          หน้า Car
        </Link>
      </div>
    </>
  );
}
