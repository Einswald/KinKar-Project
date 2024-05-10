import React, { useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import { GoGoal } from 'react-icons/go';
import { RiSurveyFill } from 'react-icons/ri';
import { FaHistory } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs';
import { FaMarker } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const menus =[
    {name:"Dashboard",link:'/',icon: MdDashboard},
    {name:"KPIs",link:'/kpis',icon: FaMarker,

        subMenus: [
            {
                name: "Goals",link:'/goals',icon: GoGoal
            },
            {
                name: "Surveys",link:'/surveys',icon: RiSurveyFill
            },
        ],
    },
    {name:"Historys",link:'/historys',icon: FaHistory },
    {name:"Log Out",link:'/',icon: MdLogout, margin: true},
];

const SideBar = () => {

    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [open] = useState(true);

  return (
    <section className='flex'>
        <div className={`bg-[#0F1035] min-h-screen ${
            open ? "w-64" : "w-32 "
            } duration-500 text-white px-4`}>
            <div>
                <div className='py-3 flex justify-center'>
                    <img src='./asset/Logoo.png' width={130}/>
                </div>
                <div className='mt-4 flex flex-col gap-4 relative'>
                    {menus?.map((menu, i) => (
                    <div key={i} >
                        <Link to={menu?.link}

                            className={` ${
                                menu?.margin && "mt-5"}
                                flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-600 rounded-md`}
                        >
                                {menu.icon ? menu.icon : <FaMarker />}
                            <div>{React.createElement(menu?.icon, {size: "20"})}</div>

                            <span className="flex-1">{menu?.name}</span>
                            {menu.subMenus && (
                                <BsChevronDown
                                 onClick={() => setSubMenuOpen(!subMenuOpen)}
                                 className={`${subMenuOpen && 'rotate-180'}`}
                                />
                            )}
                        </Link>

                            {menu.subMenus && subMenuOpen && open && (
                                <ul>
                                    {menu.subMenus.map((subMenuItem, i) => (
                                        <Link to={subMenuItem?.link}
                                        key={i}
                                        className='flex px-5 mx-5 mt-2 cursor-pointer text-center text-sm text-grey-200 py-1  hover:bg-gray-600 rounded-md'
                                        >
                                        <div className='mr-2'>{React.createElement(subMenuItem?.icon, {size: "15"})}</div>
                                        {subMenuItem.name}


                                        </Link>
                                    ))}
                                </ul>
                            )}

                    </div>

                    ))}


                </div>
            </div>
        </div>
    </section>
  )
}

export default SideBar
