import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import CustomLink from "./components/CustomLink";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="border-b border-gray-500 p-5">
          <ul className="flex gap-5">
            <li>
              <CustomLink path="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink path="/dashboard/analytics">Analytics</CustomLink>
            </li>
            <li>
              <CustomLink path="/dashboard/settings">Settings</CustomLink>
            </li>



          </ul>

        </nav>
        {children}
      </body>
    </html>
  );
}
