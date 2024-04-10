"use client";

import { Karla } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const karla = Karla({ subsets: ["latin"], weight: ["400"] });

export default function HeaderMobile() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header
                className={`${menuOpen && "before:w-full before:opacity-100"} before:content-[""] before:w-0 before:h-[1px] before:opacity-0 before:bg-primary-100 before:absolute before:bottom-0 before:right-0 before:duration-500 px-8 py-6 flex items-center justify-between bg-header relative z-50 xl:hidden`}
            >
                <Image
                    src={"/images/logo-tiaia.svg"}
                    alt="Logo Tiaia"
                    priority
                    height={50}
                    width={80}
                />

                <button
                    className="bg-transparent border-none"
                    onClick={handleMenu}
                >
                    {menuOpen ? (
                        <RiCloseLine
                            size={24}
                            color={"#E88634"}
                            className="animate-fade"
                        />
                    ) : (
                        <RiMenu3Line
                            size={24}
                            color={"#E88634"}
                            className="animate-fade"
                        />
                    )}
                </button>
            </header>

            <div
                className={`${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} border-t border-t-primary-100 fixed bottom-0 w-full h-full duration-500 bg-header z-40 px-6 pt-24 pb-4 xl:hidden`}
            >
                <ul className="pt-4">
                    <li className={`${karla.className} text-primary-400 mb-4`}>
                        <Link href={"/catalogo"}>Catálogo</Link>
                    </li>
                    <li className={`${karla.className} text-primary-400 mb-4`}>
                        <Link href={"/contato"}>Contato</Link>
                    </li>
                    <li className={`${karla.className} text-primary-400 mb-4`}>
                        <Link href={"/promo"}>Promos</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
