'use client'
import useRoutes from '../../hooks/route'
import SidebarItem from './SidebarItem';
import homeIcon from '@/public/images/discordLogo.svg'


const Sidebar = () => {
  const routes = useRoutes();
  return (
    <div className="p-10 relative bg-gradient-blue rounded-xl h-[92vh]  w-[17vw]">
      <h1 className="text-4xl font-bold font-montserrat text-white">
        Board.
      </h1>
      
        <nav className="
        mt-8
      ">
          <ul
            role="list"
            className="
            flex
            flex-col
          "
          >
            {routes.map((item) =>{
              return(
                (
                  <SidebarItem
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    active={item.active}
                  // onClick={item.onClick}
                  />
                )
              )
            } )}
          </ul>
        </nav>
        <div className='absolute flex flex-col  bottom-10 text-white text-sm font-montserrat gap-2'>
          <p className='cursor-pointer'>
            Help
          </p>
          <p className='cursor-pointer'>
            Contact Us
          </p>
        </div>
    </div>
  );
}

export default Sidebar;