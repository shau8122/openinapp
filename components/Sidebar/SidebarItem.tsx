
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
interface SidebarItemProps{
  label:string,
  icon:any,
  href:string,
  onClick?:()=>void;
  active?:boolean
}


const SidebarItem : React.FC<SidebarItemProps> = (
  {
    label,
    icon:Icon,
    href,
    onClick,
    active
  }
) => {
  const handleClick=()=>{
    if(onClick){
      return onClick();
    }
  }
  return ( 
    <li onClick={handleClick}>
      <Link 
        href={href}
        className={
          clsx(`
            flex
            w-full
            gap-x-3 font-montserrat
            rounded-md
            py-3
            text-lg
            leading-6
            text-white
            hover:font-bold
            
            `,
            active && 'font-bold'
            )
        }
        >
          <Image src={Icon} alt='icon' />
        <span className="">{label}</span>
      </Link>
    </li>
   );
}
 
export default SidebarItem;