import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import { Banner } from "@/components/Banner";
import { EndingConnect } from "@/components/EndingConnect";
import Head from "next/head";
import { BannerProfile } from "@/components/BannerProfile";
import { InfoContent } from "@/components/InfoContent";
import { Footer } from "@/components/Footer";
import { Login } from "@/components/Login";
export default function Home() {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
            </Head>
            <NavBar />

            <div className="page-padding dark-theme">
                <Login/>
               
            </div>
            <Footer />

        </>
    );
}
