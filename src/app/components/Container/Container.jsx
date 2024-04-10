import React from "react";

export default function Container({ children }) {
    return (
        <section className="bg-header py-10 px-8 sm:py-10 xl:px-0">
            <div className="w-full max-w-[1300px] mx-auto xl:px-28">
                {children}
            </div>
        </section>
    );
}
