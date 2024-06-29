import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import './global.css'
import { Banner } from "@/components/Banner";
import { EndingConnect } from "@/components/EndingConnect";
import Head from "next/head";
import { BannerProfile } from "@/components/BannerProfile";
import { InfoContent } from "@/components/InfoContent";
import { Footer } from "@/components/Footer";
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
                <Banner
                    showCTA={true}
                    title="Information you need during on-call emergencies"
                    subTitle="Quickly link new on-call tickets to similar past incidents and their solutions. All directly in Slack the moment an incident happens."
                    ctaBtn="Get started"
                    imageSize={"large"} />
                <InfoContent />
                <Banner
                    showCTA={false}
                    title="Instant setup, no custom code"
                    subTitle="Invite the bot, pick a channel, and you're set—no custom code needed, and no vendor lock-in."
                    ctaBtn="Get started"
                    imageSize={"small"} />
                <EndingConnect />
            </div>
            <Footer />

        </>
    );
}
