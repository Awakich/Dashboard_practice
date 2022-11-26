import Head from "next/head";
import DashBoard from "../components/DashBoard";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useSession, signIn } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4 text-2xl bg-white">
        Not signed in <br />
        <button
          className="px-8 py-2 bg-black text-white rounded-3xl font-semibold hover:opacity-80"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>
    );
  }

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
