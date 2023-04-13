import Head from "next/head";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  // const oppositeOrientation = screen.orientation.type.startsWith("portrait")
  //   ? "landscape"
  //   : "portrait";
  // screen.orientation.lock(oppositeOrientation);
  return (
    <>
      <Head>
        <title>Kyle Manson-Kullin</title>
        <meta
          name="description"
          content="This is the portfolio of full stack developer Kyle Manson-Kullin, here you can find more information about himself, the technologies he uses and his most recent projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kicon.ico" />
        <meta property="og:title" content="Kyle Manson-Kullin" />

        <meta
          name="description"
          property="og:description"
          content="This is the portfolio of full stack developer Kyle Manson-Kullin, here you can find more information about himself, the technologies he uses and his most recent projects."
        />

        <meta name="image" property="og:image" content="/logo-icon.png" />
        <meta property="og:url" content="kjmk.vercel.app" />
        <meta property="og:site_name" content="Kyle Manson-Kullin" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="Portfolio" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
        <link rel="apple-touch-icon" href="/kicon.ico" />
      </Head>
      <main>
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
