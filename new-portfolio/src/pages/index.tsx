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
      </Head>
      <main>
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
