import React from "react";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
    return (
        <>
            <HeaderMobile />
            <HeaderDesktop />
        </>
    );
}
