import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import EmpHours from "../pages/EmpHours";
import { NextAuthProviders } from "./providers";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100"> 
      
        <NextAuthProviders>
          <Header />
          <div className="flex flex-1"> 
            <Sidebar />
            <div className="flex flex-1 divide-x divide-gray-400">
              <div className="w-1/2 bg-gray-300 flex flex-col p-4"> 
                <h1 className="text-2xl font-bold text-center">Company Notes</h1>
                <div className="overflow-auto"> 
                  {children}
                </div>
              </div>
              <div className="w-1/2 bg-gray-200 flex flex-col p-4"> 
                <h1 className="text-2xl font-bold text-center">Employee Hours</h1>
                <EmpHours />
              </div>
            </div>
          </div>
          <Footer />
        </NextAuthProviders>
      </body>
    </html>
  );
}
