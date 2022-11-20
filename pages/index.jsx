import Head from "next/head";
import DashBoard from "../components/DashBoard";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div className="xl:h-screen h-full">
      <Head>
        <title>Home</title>
        <meta name="description" content="Create dashboard on next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* SideBar */}
      <SideBar />

      {/* Header */}

      <Header />

      <div className="flex items-center justify-center 2xl:pt-16 xl:pt-14 md:pt-0">
        {/* Dashboard */}

        <DashBoard />
      </div>
    </div>
  );
}
