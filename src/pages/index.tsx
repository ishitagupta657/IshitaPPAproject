import { Banner } from "@/components/Banner";
import { EndingConnect } from "@/components/EndingConnect";
import { InfoContent } from "@/components/InfoContent";
import Layout from "@/components/Layout";
export default function Home() {
    return (
        <>
            <Layout >
                <div className="page-padding theme-background">
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
            </Layout >
        </>
    );
}
