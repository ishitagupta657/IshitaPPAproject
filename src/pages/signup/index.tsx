import Signup from "@/components/Signup";
import Layout from "@/components/Layout";

export default function Home() {
    return (
        <>
            <Layout >
                <div className="page-padding theme-background">
                    <Signup />
                </div>
            </Layout>
        </>
    );
}
