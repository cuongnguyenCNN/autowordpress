import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./css/5fe9234b49fd0489.css";
import "./css/65aa3619a1925c9d.css";
import "./css/48340cfe5c3cfec7.css";
import "./css/f496f515208c855b.css";
import { UserProvider } from "../contexts/userscontext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LinkPost ",
  description: "grow without posting everyday",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-94CGB6BJEZ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
               window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-94CGB6BJEZ');
            `,
          }}
        />
      </head>
      <body
        className={`overflow-x-clip mobile-overflow-fix ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider> {children}</UserProvider>
      </body>
    </html>
  );
}
