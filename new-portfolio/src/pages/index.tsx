import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";

export default function Home() {
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
      </main>
    </>
  );
}
