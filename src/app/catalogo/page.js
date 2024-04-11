"use client";

import { Karla } from "next/font/google";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import ProductItem from "../components/Product/Product";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

import { url } from "../../../url-config";

const karla = Karla({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["italic", "normal"]
});

export default function Catalogo() {
    const [products, setProducts] = useState([]);

    const getProduct = async () => {
        const response = await fetch(url.urlProd, {
            cache: "no-store"
        });

        const res = await response.json();

        setProducts(res.products);
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <>
            <Header />

            <section className="bg-header py-10 px-8 sm:py-10 xl:px-0">
                <div className="w-full max-w-[1300px] mx-auto xl:px-28">
                    <div className="pb-10">
                        <Link
                            href={"/"}
                            className={`${karla.className} text-black-text`}
                        >
                            Home
                        </Link>
                        <Link
                            href={"/catalogo"}
                            className={`${karla.className} text-black-text ml-10 relative before:content-[""] before:w-2 before:h-2 before:bg-primary-400 before:rounded-full before:absolute before:-left-6 before:bottom-[5px]`}
                        >
                            Catálogo
                        </Link>
                    </div>

                    <div className="xl:grid xl:grid-cols-3 xl:gap-8 mb-10 flex items-center justify-center flex-col">
                        {products.length > 0 &&
                            products.map((product) => (
                                <ProductItem
                                    key={product.name}
                                    product={product}
                                />
                            ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
