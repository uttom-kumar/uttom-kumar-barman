import {Geist, Geist_Mono} from "next/font/google";
import "@/app/style/globals.css";
import {ThemeProvider} from "@/components/front-UI/theme/theme-provider";
import AppNavbar from "@/components/front-UI/nav-layout/app-navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
  title: "Uttom Kumar – MERN Stack Developer | Full-Stack Web Developer",
  description: "Portfolio of Uttom Kumar, a passionate MERN stack developer specializing in modern web applications with React, Node.js, MongoDB, and Next.js.",
  
  openGraph: {
    title: "Uttom Kumar – MERN Stack Developer",
    description: "Portfolio of Uttom Kumar, a passionate MERN stack developer specializing in modern web applications.",
    url: "/", // home page
    siteName: "Uttom Kumar Portfolio",
    images: [
      {
        url: "/og-image.png", // use image inside public folder
        width: 1200,
        height: 630,
        alt: "Uttom Kumar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Uttom Kumar – MERN Stack Developer",
    description: "Portfolio of Uttom Kumar, a passionate MERN stack developer.",
    images: ["/og-image.png"], // same local image
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <AppNavbar>
                {children}
            </AppNavbar>
        </ThemeProvider>
        </body>
        </html>
    );
}
