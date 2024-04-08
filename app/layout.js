import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>

  );
}