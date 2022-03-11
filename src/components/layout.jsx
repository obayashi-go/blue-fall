import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./layout.css";

export default function Layout({ children }) {
    return(
        <>
            <div className="bg_pattern Polka">
                <Header />
                    {children}
                <Footer />
            </div>
        </>
    )
};