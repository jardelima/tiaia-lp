import React from "react";

export default function Product({ params }) {
    return (
        <>
            <div>Page</div>
            <div>{params.slug}</div>
        </>
    );
}
