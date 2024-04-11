import UserInfo from "@/app/components/LoginFunction";
import Layout from "@/app/layoutLogin";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";


export default function Home() {
  return (
    <div className="bg-gray-200 ">
      <div className="flex flex-col justify-center items-center min-h-screen ">
        <Header />
        <div className="flex flex-col items-center justify-center flex-grow">
          <UserInfo />
        </div>
      </div>
      <Footer />
    </div>
  );
}


