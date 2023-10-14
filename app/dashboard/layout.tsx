import Sidebar from "@/components/Sidebar/Sidebar";


export default async function UsersLayout({
  children
}:{children:React.ReactNode}){
  return(
    <div className="bg-[#F8FAFF] flex max-w-[1600px] h-screen px-10 py-5">
      <div className="hidden md:block">

        <Sidebar/>
      </div>
         {children}
    </div>
  )
}