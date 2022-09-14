import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../navbar";


const Layout = () => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                crossOrigin="anonymous"
            />
            <Navbar />
            <Outlet />
        </>
    );
};

export default Layout;