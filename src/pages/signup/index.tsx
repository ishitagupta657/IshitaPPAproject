import { NavBar } from "@/components/NavBar";
import Head from "next/head";
import { Footer } from "@/components/Footer";
import Signup from "@/components/Signup";
import './../global.css'
import { useState } from "react";

export default function Home() {
    const [theme, SetTheme] = useState<any>('')
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
            </Head>
            <NavBar theme={theme} SetTheme={SetTheme} />

            <div className="page-padding theme-background">
                <Signup />

            </div>
            <Footer  theme={theme}/>

        </>
    );
}
