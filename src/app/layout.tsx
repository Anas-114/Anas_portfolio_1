import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D5C63",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Anas | Flutter Developer — Personal Portfolio",
  description:
    "Personal portfolio of Anas, a 20-year-old Flutter Developer based in Calicut, Kerala. Crafting fluid, high-performance mobile apps with clean architecture, modern state management, and real-time SDKs.",
  keywords: [
    "Anas",
    "Flutter Developer",
    "Mobile Developer Kerala",
    "Flutter Calicut",
    "Dart",
    "Firebase",
    "Riverpod",
    "ZEGOCLOUD",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Anas" }],
  creator: "Anas",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Anas | Flutter Developer",
    description: "Building things. Exploring tech. Curious mind, better tomorrow.",
    siteName: "Anas Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={plusJakarta.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col selection:bg-[#0D5C63] selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
