import { Karla } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const karla = Karla({
    subsets: ["latin"],
    weight: ["200", "400", "700"],
    style: ["italic", "normal"]
});

export default function ProductItem({ product }) {
    return (
        <div className="w-full max-w-[400px] mb-10 xl:mb-8 flex items-center justify-center flex-col">
            <Link href={`/catalogo/${product.slug}`} className="w-full">
                <Image
                    src={product.image.path}
                    alt={product.image.alt}
                    width={360}
                    height={360}
                    className="w-full mb-4"
                />
            </Link>
            <div className="group w-full h-16  overflow-hidden">
                <div className="group-hover:-translate-y-10 group-hover:opacity-0 opacity-100 translate-y-0 duration-500 flex items-center justify-center flex-col">
                    <h3
                        className={`${karla.className} text-base text-black-text xl:text-xl`}
                    >
                        {product.name}
                    </h3>
                    <p
                        className={`${karla.className} italic font-bold text-black-text text-base xl:text-xl`}
                    >
                        {product.price}
                    </p>
                </div>
                <div className="group-hover:-translate-y-14 group-hover:opacity-100 group-hover:border-primary-400 group-hover:text-primary-400 w-full h-10 opacity-0 translate-y-4 border border-transparent duration-500 flex items-center justify-center">
                    <Link
                        href={`/catalogo/${product.slug}`}
                        className={`${karla.className} uppercase text-sm w-full h-full flex items-center justify-center`}
                    >
                        Eu quero!
                    </Link>
                </div>
            </div>
        </div>
    );
}
