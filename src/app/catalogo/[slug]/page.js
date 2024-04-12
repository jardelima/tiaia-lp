import React from "react";

import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import SlugProduct from "@/app/components/SlugProduct/SlugProduct";

import { url } from "../../../../url-config";

export async function generateStaticParams() {
    const response = await fetch(url.urlProd);
    const res = await response.json();

    return res.products.map((product) => ({ slug: product.slug }));
}

export default function Product({ params }) {
    return (
        <>
            <Header />

            <SlugProduct params={params} />

            <Footer />
        </>
    );
}
