"use client";

/* eslint-disable no-undef */
import { Karla, PT_Serif } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductItem from "./components/Product/Product";

import { url } from "../../url-config";

const karla = Karla({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["italic", "normal"]
});

const pt_serif = PT_Serif({
    subsets: ["latin"],
    weight: ["700", "400"],
    style: "italic"
});

export default function Home() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch(url.urlProd, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });

        const res = await response.json();

        setProducts(res.products);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <Header />

            <section className="w-full h-72 md:h-80 xl:h-[70vh] relative flex items-center">
                <Image
                    src={"/banners/banner-desktop.png"}
                    alt="Logo Tiaia"
                    fill
                    className="w-full h-full object-cover"
                />

                <div className="absolute z-10 px-8 xl:px-28 w-full max-w-[1300px] xl:left-1/2 xl:right-1/2 xl:-translate-x-1/2 mx-auto">
                    <h1
                        className={`${karla.className} text-primary-400 text-3xl md:text-5xl md:mb-8 xl:mb-12 xl:text-7xl mb-4`}
                    >
                        <strong className={`${pt_serif.className} italic`}>
                            design
                        </strong>
                        <br />
                        autêntico
                        <br />& atemporal
                    </h1>

                    <Link
                        href={"/catalogo"}
                        className={`${karla.className} uppercase bg-primary-400 px-4 py-2 md:text-sm text-xs xl:text-base xl:hover:bg-transparent border xl:hover:text-primary-400 xl:duration-500 border-primary-400 text-white-400`}
                    >
                        Ver catálogo
                    </Link>
                </div>
            </section>

            <section className="bg-header py-10 border-t border-t-primary-100 border-b border-b-primary-100 px-8 xl:px-0 sm:py-20">
                <div className="w-full max-w-[1300px] mx-auto grid grid-cols-2 gap-5 sm:flex sm:items-center sm:justify-between xl:px-28">
                    <div className="flex items-center justify-start mb-8 sm:mb-0">
                        <Image
                            src={"/images/ce.svg"}
                            alt="Imagem do estado do Ceará"
                            width={50}
                            height={50}
                            className="mr-2 w-8 xl:w-12 xl:mr-6"
                        />
                        <p
                            className={`${karla.className} !leading-[10px] text-black-text text-sm xl:text-lg`}
                        >
                            Feita
                            <br />
                            no{" "}
                            <span
                                className={`${pt_serif.className} italic text-base xl:text-xl`}
                            >
                                ceará
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center justify-start mb-8 sm:mb-0">
                        <Image
                            src={"/images/woman.svg"}
                            alt="Imagem Ilustrativa de uma mulher"
                            width={50}
                            height={50}
                            className="mr-2 w-8 xl:w-12 xl:mr-6"
                        />
                        <p
                            className={`${karla.className} !leading-[10px] text-black-text text-sm xl:text-lg`}
                        >
                            Idealizada
                            <br />
                            por{" "}
                            <span
                                className={`${pt_serif.className} italic text-base xl:text-xl`}
                            >
                                mulheres
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center justify-start">
                        <Image
                            src={"/images/effect.svg"}
                            alt="Imagem ilustrativa de artesanato"
                            width={50}
                            height={50}
                            className="mr-2 w-8 xl:w-14 xl:mr-6"
                        />
                        <p
                            className={`${karla.className} !leading-[10px] text-black-text text-sm xl:text-lg`}
                        >
                            Produto
                            <br />
                            <span
                                className={`${pt_serif.className} italic text-base xl:text-xl`}
                            >
                                artesanal
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center justify-start">
                        <Image
                            src={"/images/draft.svg"}
                            alt="Imagem ilustrativo de design"
                            width={50}
                            height={50}
                            className="mr-2 w-8 xl:w-14 xl:mr-6"
                        />
                        <p
                            className={`${karla.className} !leading-[10px] text-black-text text-sm xl:text-lg`}
                        >
                            Design
                            <br />
                            <span
                                className={`${pt_serif.className} italic text-base xl:text-xl`}
                            >
                                autoral
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-header py-10 px-8 sm:py-20 xl:px-0">
                <div className="w-full max-w-[1300px] mx-auto sm:flex sm:justify-between sm:items-center xl:px-28">
                    <h2
                        className={`${pt_serif.className} mb-6 italic text-primary-400 text-4xl relative before:content-[""] before:w-6 before:h-[1px] before:bg-primary-400 before:absolute before:-top-3 before:left-0 sm:text-5xl sm:mr-10 md:text-7xl xl:text-8xl xl:before:h-[2px] xl:before:w-16 xl:before:-top-8`}
                    >
                        Quem
                        <br />
                        somos
                    </h2>

                    <div className="md:max-w-[600px]">
                        <p
                            className={`${pt_serif.className} italic font-bold text-black-text mb-4`}
                        >
                            Somos cearenses. Somos brasileiras
                        </p>

                        <p
                            className={`${karla.className} mb-10 text-black-text`}
                        >
                            Somos uma marca idealizada por mulheres que
                            acreditam em uma moda consciente. Uma moda com{" "}
                            <span className="font-bold italic">propósito</span>.
                            Aqui, a gente se preocupa com quem faz e como se
                            faz.
                        </p>

                        <p className={`${karla.className} text-black-text`}>
                            Criamos produtos únicos e cheio de história para te
                            acompanhar
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white-400 py-10 px-8 sm:py-20 xl:px-0">
                <div className="w-full max-w-[1300px] mx-auto md:flex md:justify-between md:items-center xl:px-28">
                    <div className="flex items-center justify-start mb-10 md:mr-10 md:mb-0">
                        <Image
                            src={"/images/buy.svg"}
                            alt="Imagem ilustrativa de comprar pelo celular"
                            width={50}
                            height={50}
                            className="mr-6 w-8 xl:w-14 xl:mr-6"
                        />

                        <div>
                            <h3
                                className={`${pt_serif.className} italic font-bold text-black-text relative mb-4 xl:text-lg before:content-[""] before:w-4 before:h-[1px] before:bg-black-text before:absolute before:-bottom-2`}
                            >
                                Compras
                            </h3>

                            <p
                                className={`${karla.className} text-black-text text-sm xl:text-base`}
                            >
                                Compre pelo whatsapp! Escolha sua tiaia e fale
                                com a gente :&#41;
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-start mb-10 md:mr-10 md:mb-0">
                        <Image
                            src={"/images/send.svg"}
                            alt="Imagem ilustrativa de envio de pedidos"
                            width={50}
                            height={50}
                            className="mr-6 w-8 xl:w-14 xl:mr-6"
                        />

                        <div>
                            <h3
                                className={`${pt_serif.className} italic font-bold text-black-text relative mb-4 xl:text-lg before:content-[""] before:w-4 before:h-[1px] before:bg-black-text before:absolute before:-bottom-2`}
                            >
                                Envios
                            </h3>

                            <p
                                className={`${karla.className} text-black-text text-sm xl:text-base`}
                            >
                                Receba sua tiaia em casa! Frete grátis para
                                pedidos acima de R$ 300.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-start">
                        <Image
                            src={"/images/club.svg"}
                            alt="Imagem ilustrativa do clube tiaia"
                            width={50}
                            height={50}
                            className="mr-6 w-8 xl:w-14 xl:mr-6"
                        />

                        <div>
                            <h3
                                className={`${pt_serif.className} italic font-bold text-black-text relative mb-4 xl:text-lg before:content-[""] before:w-4 before:h-[1px] before:bg-black-text before:absolute before:-bottom-2`}
                            >
                                Clube
                            </h3>

                            <p
                                className={`${karla.className} text-black-text text-sm xl:text-base`}
                            >
                                Participe do nosso clube tiaia e receba
                                descontos exclusivos!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Container>
                <h2
                    className={`${karla.className} relative uppercase text-black-text text-lg sm:text-2xl flex items-center justify-center mb-10 sm:mb-20 before:content-[""] before:w-10 before:h-[1px] before:bg-primary-400 before:absolute before:-bottom-2`}
                >
                    Catálogo
                </h2>

                <div className="xl:grid xl:grid-cols-3 xl:gap-8 mb-10 flex items-center justify-center flex-col">
                    {products.map((product) => (
                        <ProductItem key={product.name} product={product} />
                    ))}
                </div>

                <div className="flex items-center justify-center">
                    <Link
                        href={"/catalogo"}
                        className={`${karla.className} px-8 py-2 text-black-text hover:-translate-y-3 hover:border-primary-400 hover:text-primary-400 duration-500 uppercase text-sm border border-black-text`}
                    >
                        Ver catálogo completo
                    </Link>
                </div>
            </Container>

            <Footer />
        </>
    );
}
