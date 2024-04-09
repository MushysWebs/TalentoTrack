import UserInfo from "@/app/components/UserInfo";
import Layout from "@/app/layoutLogin";


export default function Home() {
  return (
    
    <div className="grid place-items-center h-screen -mt-24">
      <UserInfo/>
      <Layout/>
    </div>
  );
}
