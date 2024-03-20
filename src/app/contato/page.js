import { Karla } from "next/font/google";
import Link from "next/link";
import React from "react";

import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

const karla = Karla({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["italic", "normal"]
});

export default function Contato() {
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
                            Contato
                        </Link>
                    </div>

                    <div>
                        <h2 className={`${karla.className} text-2xl mb-10`}>
                            Entre em contato conosco!
                        </h2>

                        <form>
                            <div className="flex items-start justify-start flex-col mb-8">
                                <label
                                    className={`${karla.className} mb-2`}
                                    htmlFor="name"
                                >
                                    Nome*
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className={`${karla.className} text-sm bg-transparent border border-[rgba(0,0,0,0.1)] w-full h-10 focus-within:border-primary-400 px-4`}
                                />
                            </div>

                            <div className="flex items-start justify-start flex-col mb-8">
                                <label
                                    className={`${karla.className} mb-2`}
                                    htmlFor="email"
                                >
                                    E-mail*
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={`${karla.className} text-sm bg-transparent border border-[rgba(0,0,0,0.1)] w-full h-10 focus-within:border-primary-400 px-4`}
                                />
                            </div>

                            <div className="flex items-start justify-start flex-col mb-8">
                                <label
                                    className={`${karla.className} mb-2`}
                                    htmlFor="message"
                                >
                                    Mensagem*
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className={`${karla.className} resize-none text-sm bg-transparent border border-[rgba(0,0,0,0.1)] w-full h-52 focus-within:border-primary-400 p-4`}
                                />
                            </div>

                            <input
                                type="submit"
                                value={"Enviar"}
                                className={`${karla.className} px-8 py-1 bg-primary-400 border border-primary-400 text-white-400 duration-500 hover:cursor-pointer hover:bg-transparent hover:text-primary-400`}
                            />
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
