import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Orders from "./pages/Orders";
import Payments from "./pages/Payments";
import Products from "./pages/Products";
import Users from "./pages/Users";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path={"orders"} element={<Orders />} />
                    <Route path="payments" element={<Payments />} />
                    <Route path="products" element={<Products />} />
                    <Route path="users" element={<Users />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);