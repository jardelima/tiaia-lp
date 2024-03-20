import { Karla, PT_Serif } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

export default function Footer() {
    return (
        <footer className="bg-primary-400 py-10 px-8 sm:pt-10 md:pb-5 xl:px-0">
            <div className="w-full max-w-[1300px] mx-auto xl:px-28">
                <div className="mb-4 pb-4 border-b border-b-white-100 md:grid md:grid-cols-[150px_200px_250px_auto] md:gap-8 md:items-start md:mb-5 md:pb-10">
                    <Image
                        src={"/images/logo-tiaia.svg"}
                        alt="Logo Tiaia"
                        width={70}
                        height={30}
                        objectFit="contain"
                        className="brightness-0 invert mb-10 md:mb-0"
                    />

                    <div className="mb-8 md:mb-0">
                        <h3
                            className={`${pt_serif.className} xl:text-xl text-white-400 text-lg underline mb-2`}
                        >
                            Conheça
                        </h3>

                        <ul>
                            <li
                                className={`${karla.className} text-white-400 text-sm mb-1`}
                            >
                                Quem somos
                            </li>
                            <li
                                className={`${karla.className} text-white-400 text-sm mb-1`}
                            >
                                Formas de pagamento
                            </li>
                            <li
                                className={`${karla.className} text-white-400 text-sm mb-1`}
                            >
                                Entregas e Taxas
                            </li>
                        </ul>
                    </div>

                    <div className="mb-8 md:mb-0">
                        <h3
                            className={`${pt_serif.className} xl:text-xl text-white-400 text-lg underline mb-2`}
                        >
                            Contato
                        </h3>

                        <ul>
                            <li
                                className={`${karla.className} text-white-400 text-sm mb-1`}
                            >
                                tiaia.contato@gmail.com
                            </li>
                            <li
                                className={`${karla.className} text-white-400 text-sm mb-1`}
                            >
                                +55 (85) 99930-1897
                            </li>
                            <li
                                className={`${karla.className} text-white-400 text-sm mb-1`}
                            >
                                Nosso Whatsapp
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-start md:justify-end">
                        <Link href={"/"} className="mr-2">
                            <Image
                                src={"/images/instagram.svg"}
                                alt="Logo Instagram"
                                width={20}
                                height={20}
                                objectFit="contain"
                            />
                        </Link>
                        <Link href={"/"}>
                            <Image
                                src={"/images/whatsapp.svg"}
                                alt="Logo Whatsapp"
                                width={20}
                                height={20}
                                objectFit="contain"
                            />
                        </Link>
                    </div>
                </div>

                <div>
                    <p className={`${karla.className} text-white-400 text-xs`}>
                        Tiaia. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
