import "@/app/globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Header from "../components/header/header";
import Footer from "../components/footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} flex flex-col flex-1 min-h-screen`}>
        <Header />
        <div className="flex flex-col flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
