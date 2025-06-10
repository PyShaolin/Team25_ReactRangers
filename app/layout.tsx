// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import I18nextProviderWrapper from "@/components/I18nextProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Government Scheme Eligibility Analyzer",
  description: "Discover and apply for government schemes based on your profile",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nextProviderWrapper>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </I18nextProviderWrapper>
      </body>
    </html>
  );
}
