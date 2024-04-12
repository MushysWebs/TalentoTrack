import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="flex-1 bg-gray-200">
            {children}
          </div>
        </div>
        <Footer />
    </div>
  );
}