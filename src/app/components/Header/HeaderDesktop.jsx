import { Karla } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const karla = Karla({ subsets: ["latin"], weight: ["400"] });

export default function HeaderDesktop() {
    return (
        <header className="hidden xl:block py-6 bg-header border-b border-b-primary-100">
            <div className="px-4 w-full max-w-[1300px] mx-auto xl:px-28 xl:flex items-center justify-between">
                <Link href={"/"}>
                    <Image
                        src={"/images/logo-tiaia.svg"}
                        alt="Logo Tiaia"
                        priority
                        height={50}
                        width={80}
                    />
                </Link>

                <ul className="flex items-center justify-end">
                    <li
                        className={`${karla.className} mr-10 text-black-text hover:cursor-pointer relative before:content-[''] before:w-0 before:h-[2px] before:bg-primary-400 before:absolute before:-bottom-2 before:left-0 hover:before:w-full before:duration-500 before:rounded-sm`}
                    >
                        <Link href={"/produtos"}>Produtos</Link>
                    </li>
                    <li
                        className={`${karla.className} mr-10 text-black-text hover:cursor-pointer relative before:content-[''] before:w-0 before:h-[2px] before:bg-primary-400 before:absolute before:-bottom-2 before:left-0 hover:before:w-full before:duration-500 before:rounded-sm`}
                    >
                        <Link href={"/contato"}>Contato</Link>
                    </li>
                    <li
                        className={`${karla.className} text-black-text hover:cursor-pointer relative before:content-[''] before:w-0 before:h-[2px] before:bg-primary-400 before:absolute before:-bottom-2 before:left-0 hover:before:w-full before:duration-500 before:rounded-sm`}
                    >
                        <Link href={"/promo"}>Promo</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
