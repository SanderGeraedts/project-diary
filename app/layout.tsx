import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
export const metadata: Metadata = {
  title: "ProjectDiary",
  description: "Keep track of your projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-100">
        <Header />
        <div className="my-4">{children}</div>
      </body>
    </html>
  );
}
