import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from '@/components/navbar'
import { Providers } from "./provider";
import Footer from "@/components/footer";



export const metadata: Metadata = {
  title: "GameBase",
  description: "GameBase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#070F2B]">
        <Providers>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
