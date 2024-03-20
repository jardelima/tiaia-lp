import { Karla } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

import products from "../../../products";

const karla = Karla({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["italic", "normal"]
});

export default function Produtos() {
    return (
        <>
            <Header />

            <section className="bg-header py-10 px-8 sm:py-10 xl:px-0">
                <div className="w-full max-w-[1300px] mx-auto xl:px-28">
                    <div className="pb-10">
                        <Link href={"/"} className={`${karla.className}`}>
                            Home
                        </Link>
                        <Link
                            href={"/produtos"}
                            className={`${karla.className} ml-10 relative before:content-[""] before:w-2 before:h-2 before:bg-primary-400 before:rounded-full before:absolute before:-left-6 before:bottom-[5px]`}
                        >
                            Catálogo
                        </Link>
                    </div>

                    <h2
                        className={`${karla.className} relative uppercase text-black-text text-lg sm:text-2xl flex items-center justify-center mb-10 sm:mb-20 before:content-[""] before:w-10 before:h-[1px] before:bg-primary-400 before:absolute before:-bottom-2`}
                    >
                        Catálogo
                    </h2>

                    <div className="xl:grid xl:grid-cols-3 xl:gap-8 mb-10 flex items-center justify-center flex-col">
                        {products.map((product) => (
                            <div
                                key={product.name}
                                className="w-full max-w-[400px] mb-10 xl:mb-8 flex items-center justify-center flex-col"
                            >
                                <Link href={"/"} className="w-full">
                                    <Image
                                        src={product.image}
                                        alt={product.alt}
                                        width={360}
                                        height={360}
                                        objectFit="cover"
                                        className="w-full mb-4"
                                    />
                                </Link>
                                <div className="group w-full h-16  overflow-hidden">
                                    <div className="group-hover:-translate-y-10 group-hover:opacity-0 opacity-100 translate-y-0 duration-500 flex items-center justify-center flex-col">
                                        <h3
                                            className={`${karla.className} text-base xl:text-xl mb-1`}
                                        >
                                            {product.name}
                                        </h3>
                                        <p
                                            className={`${karla.className} italic font-bold text-base xl:text-xl`}
                                        >
                                            {product.price}
                                        </p>
                                    </div>
                                    <div className="group-hover:-translate-y-14 group-hover:opacity-100 group-hover:border-primary-400 group-hover:text-primary-400 w-full h-10 opacity-0 translate-y-4 border border-transparent duration-500 flex items-center justify-center">
                                        <Link
                                            href={"/"}
                                            className={`${karla.className} uppercase text-sm w-full h-full flex items-center justify-center`}
                                        >
                                            Eu quero!
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
