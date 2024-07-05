import { Login } from "@/components/Login";
import Layout from "@/components/Layout";
export default function Home() {
    return (
        <>
            <Layout >
                <div className="page-padding theme-background">
                    <Login />
                </div>
            </Layout>
        </>
    );
}
