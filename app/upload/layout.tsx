import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default async function UsersLayout({
  children
}:{children:React.ReactNode}){
  return(
    <div className="bg-[#F8FAFF] flex max-w-[1600px] h-screen ">
      <div className="hidden md:block">
        <Sidebar/>
      </div>
      <div className=" flex flex-col w-full md:py-8 px-2 md:px-10">

      <Navbar/>
      {children}
      </div>
      
    </div>
  )
}