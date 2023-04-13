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
          content="Portfolio of full stack developer Kyle Manson-Kullin"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kicon.ico" />
        <meta property="og:title" content="GoalTrack" />

        <meta
          property="og:description"
          content="Live football results up-to-the-minute"
        />

        <meta property="og:image" content="%PUBLIC_URL%/logo-icon.png" />
        <meta property="og:url" content="goaltrack.live" />
        <meta property="og:site_name" content="GoalTrack" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo-icon.png" />
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
