import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hani El Khalfi - Full-Stack Developer & Data Scientist",
  description: "Shipped 4+ web apps (1,200+ users) and built ML pipelines that cut processing time by 70%. Angular/React • Spring Boot/Node • Docker • SQL/Mongo.",
  keywords: ["Hani El Khalfi", "Full-Stack Developer", "Data Scientist", "Angular", "React", "Spring Boot", "Machine Learning", "AI"],
  authors: [{ name: "Hani El Khalfi", url: "https://github.com/heniEl10" }],
  creator: "Hani El Khalfi",
  publisher: "Hani El Khalfi",
  metadataBase: new URL("https://hani-el-khalfi.vercel.app"),
  icons: {
    icon: '/images/avatar.jpg',
    shortcut: '/images/avatar.jpg',
    apple: '/images/avatar.jpg',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Hani El Khalfi",
    title: "Hani El Khalfi - Full-Stack Developer & Data Scientist",
    description: "Shipped 4+ web apps (1,200+ users) and built ML pipelines that cut processing time by 70%.",
    images: [
      {
        url: "/images/IMG_4054.jpg",
        width: 1200,
        height: 630,
        alt: "Hani El Khalfi - Full-Stack Developer & Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hani El Khalfi - Full-Stack Developer & Data Scientist",
    description: "Shipped 4+ web apps (1,200+ users) and built ML pipelines that cut processing time by 70%.",
    images: ["/images/IMG_4054.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/images/avatar.jpg" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/avatar.jpg" />
        <link rel="apple-touch-icon" href="/images/avatar.jpg" />
      </head>
      <body
        className="font-sans antialiased min-h-screen bg-background text-foreground"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
