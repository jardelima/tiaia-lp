"use client";

import { Karla, PT_Serif } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";

import Container from "@/app/components/Container/Container";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import ProductItem from "@/app/components/Product/Product";

import { url } from "../../../../url-config";

const karla = Karla({
    subsets: ["latin"],
    weight: ["200", "400", "700"],
    style: ["italic", "normal"]
});

const pt_serif = PT_Serif({
    subsets: ["latin"],
    weight: ["700", "400"],
    style: "italic"
});

export default function Product({ params }) {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const [qtd, setQtd] = useState(1);
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const [priceWithQtd, setPriceWithQtd] = useState(0);
    const [productColor, setProductColor] = useState("");
    const [errorColor, setErrorColor] = useState(false);

    const moreQtd = () => {
        if (stock !== 0 && qtd < stock) {
            setQtd((qtd) => qtd + 1);
            return;
        }

        if (stock !== 0) {
            return;
        }

        setErrorColor(true);
    };

    const lessQtd = () => qtd > 1 && setQtd((qtd) => qtd - 1);

    const handleColor = (color, stock) => {
        if (errorColor) {
            setErrorColor(false);
        }

        setStock(stock);
        setProductColor(color);
    };

    const getProduct = async () => {
        const response = await fetch(url.urlProd, {
            cache: "no-store"
        });

        const res = await response.json();
        const currentProduct = res.products.filter(
            (product) => product.slug === params.slug
        );

        setProduct(currentProduct);
        setPrice(currentProduct[0].price.replace("R$ ", "").replace(",00", ""));
        setPriceWithQtd(
            currentProduct[0].price.replace("R$ ", "").replace(",00", "")
        );

        setProducts(res.products);
    };

    useEffect(() => {
        getProduct();
    }, []);

    useEffect(() => {
        setPriceWithQtd(price * qtd);
    }, [qtd]);

    return (
        <>
            <Header />

            <Container>
                <div className="pb-10">
                    <Link
                        href={"/catalogo"}
                        className={`${karla.className} text-black-text`}
                    >
                        {product.length > 0 && product[0].promo
                            ? "Promoções"
                            : "Catálogo"}
                    </Link>
                    <Link
                        href={"#"}
                        className={`${karla.className} ml-10 text-black-text relative before:content-[""] before:w-2 before:h-2 before:bg-primary-400 before:rounded-full before:absolute before:-left-6 before:bottom-[5px]`}
                    >
                        {product.length > 0 && product[0].name}
                    </Link>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-[auto_400px] lg:gap-28 lg:mb-20">
                    {product.length > 0 && (
                        <Image
                            src={product[0].image.path}
                            alt={product[0].image.alt}
                            width={400}
                            height={400}
                            className="w-full mb-5 lg:mb-0"
                        />
                    )}

                    <div>
                        <h3
                            className={`${karla.className} font-extralight text-black-text text-3xl mb-2`}
                        >
                            <strong
                                className={`${pt_serif.className} font-bold mr-2`}
                            >
                                {product.length > 0 &&
                                    product[0].name.split(" ")[0]}
                            </strong>
                            {product.length > 0 &&
                                product[0].name.split(" ")[1]}
                        </h3>

                        <p
                            className={`${karla.className} text-black-text font-bold mb-5`}
                        >
                            R$ {priceWithQtd}
                        </p>

                        <div className="flex items-center justify-start mb-5 lg:mb-10">
                            <div className="mr-4">
                                <div className="flex items-center justify-start border border-primary-400">
                                    <button
                                        onClick={lessQtd}
                                        className={`${karla.className} flex items-center justify-center text-primary-400 px-3 h-10 rounded-sm duration-300`}
                                    >
                                        -
                                    </button>
                                    <span
                                        className={`${karla.className} mx-4 text-primary-400`}
                                    >
                                        {qtd}
                                    </span>
                                    <button
                                        onClick={moreQtd}
                                        className={`${karla.className} flex items-center justify-center text-primary-400 px-3 h-10 rounded-sm duration-300`}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <Link
                                href={"#"}
                                className={`${karla.className} w-full bg-primary-400 text-white-400 px-8 h-[42px] flex items-center justify-center duration-500 uppercase text-sm border border-primary-400 hover:border-primary-400 hover:text-primary-400 hover:bg-transparent`}
                            >
                                Adicionar ao carrinho
                            </Link>
                        </div>

                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item !rounded-none">
                                <input
                                    type="radio"
                                    name="my-accordion-4"
                                    defaultChecked
                                />
                                <div
                                    className={`${pt_serif.className} collapse-title text-lg pb-0 text-black-text pl-0 before:content-[""] before:w-full before:h-[1px] before:absolute before:bottom-2 before:left-0 before:bg-black-text`}
                                >
                                    Cores
                                    <div
                                        className={`${karla.className} ${errorColor ? "opacity-100" : "opacity-0"} duration-300 not-italic before:!text-white-400 tooltip tooltip-open tooltip-right tooltip-error -top-[6px] -right-4`}
                                        data-tip="Selecione uma cor"
                                    />
                                </div>

                                <div className="collapse-content pl-0">
                                    <div className="flex items-center justify-start mt-4">
                                        {product.length > 0 &&
                                            product[0].stock.colors.map(
                                                (color) => (
                                                    <div
                                                        key={color.name}
                                                        onClick={() =>
                                                            handleColor(
                                                                color.name,
                                                                color.quantity
                                                            )
                                                        }
                                                        style={{
                                                            backgroundColor: `${color.color}`
                                                        }}
                                                        className={`relative flex items-center justify-center w-6 h-6 mr-2 duration-300 hover:cursor-pointer`}
                                                    >
                                                        <FaCheck
                                                            className={`${productColor === color.name ? "opacity-100" : "opacity-0"} absolute duration-300`}
                                                            fontSize={14}
                                                            color="#fff"
                                                        />
                                                    </div>
                                                )
                                            )}
                                    </div>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item !rounded-none">
                                <input type="radio" name="my-accordion-4" />
                                <div
                                    className={`${pt_serif.className} collapse-title text-lg pl-0 text-black-text before:content-[""] before:w-full before:h-[1px] before:absolute before:bottom-2 before:left-0 before:bg-black-text`}
                                >
                                    Descrição
                                </div>
                                <div className="collapse-content pl-0">
                                    <p
                                        className={`${karla.className} text-black-text text-sm mt-4`}
                                    >
                                        {product.length > 0 &&
                                            product[0].description}
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item !rounded-none">
                                <input type="radio" name="my-accordion-4" />
                                <div
                                    className={`${pt_serif.className} collapse-title text-lg pl-0 text-black-text relative before:content-[""] before:w-full before:h-[1px] before:absolute before:bottom-2 before:left-0 before:bg-black-text`}
                                >
                                    Medidas
                                </div>
                                <div className="collapse-content pl-0">
                                    <p
                                        className={`${karla.className} text-black-text text-sm mt-4`}
                                    >
                                        {product.length > 0 &&
                                            product[0].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container>
                <h2
                    className={`${karla.className} relative uppercase text-black-text text-lg sm:text-2xl flex items-center justify-center mb-10 sm:mb-20 before:content-[""] before:w-10 before:h-[1px] before:bg-primary-400 before:absolute before:-bottom-2`}
                >
                    você também pode gostar
                </h2>

                <div className="xl:grid xl:grid-cols-3 xl:gap-8 mb-10 flex items-center justify-center flex-col">
                    {products.slice(0, 3).map((product) => (
                        <ProductItem key={product.name} product={product} />
                    ))}
                </div>

                <div className="flex items-center justify-center">
                    <Link
                        href={"/produtos"}
                        className={`${karla.className} px-8 py-2 text-black-text hover:-translate-y-3 hover:border-primary-400 hover:text-primary-400 duration-500 uppercase text-sm border border-black-text`}
                    >
                        Ver mais produtos
                    </Link>
                </div>
            </Container>

            <Footer />
        </>
    );
}
