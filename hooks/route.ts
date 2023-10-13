import { useParams, usePathname } from "next/navigation";
import settingIcon from '@/public/Icon/setting_icon.svg'
import dashboardIcon from '@/public/Icon/dashboard_icon.svg'
import scheduleIcon from '@/public/Icon/schedule_icon.svg'
import transactionIcon from '@/public/Icon/transaction_icon.svg'
import userIcon from '@/public/Icon/user_icon.svg'
import { useMemo } from "react";

const useRoutes=()=>{
  const pathname = usePathname();
  const routes = useMemo(()=>[
    {
      label:'Dashboard',
      href: '/dashboard',
      icon:dashboardIcon,
      active:pathname==='/dashboard'
    },
    {
      label:'Transactions',
      href:'/transactions',
      icon:transactionIcon,
      active:pathname==='/transactions'
    },
    {
      label:'Schedules',
      href:'/schedules',
      icon:scheduleIcon,
      active:pathname==='/schedules'
    },
    {
      label:'Users',
      href:'/users',
      icon:userIcon,
      active:pathname==='/users'
    },
    {
      label:'Settings',
      href:'/settings',
      icon:settingIcon,
      active:pathname==='/settings'
    },
  ],[pathname]);

  return routes
}
export default useRoutes;