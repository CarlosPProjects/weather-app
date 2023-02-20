import { FC } from "react";
import Head from "next/head";
import { Poppins } from "@next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Weather App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${poppins.className} bg-[#222222] h-screen`}>{children}</div>
    </>
  );
};
export default Layout;
