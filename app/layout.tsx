import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Apex Global",
  description: "Apex Global - Elevate Your Skills with Our Courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`font-apex`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
