import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import {  neobrutalism, shadesOfBlue } from "@clerk/themes";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Fileshare App",
  description: "Share files with your friends and family",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [ neobrutalism],
        variables: { colorPrimary: "black" },
        signIn: {
          baseTheme: [shadesOfBlue],
          variables: { colorPrimary: "black" },
        }
      }}
    >
      <html lang="en">
        <body className={outfit.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
