import React, { useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import { FaBuilding } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs';
import { FaMarker } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const menus =[
    {name:"Dashboard",link:'dashboard',icon: MdDashboard},
    {name:"Department",link:'department',icon: FaBuilding},
    {name:"Schedules",link:'schedules',icon: FaCalendar},
    {name:"Recap",link:'recap',icon: FaBook},
    {name:"Log Out",link:'dashboard',icon: MdLogout, margin: true},
];

const AdminSidebar = () => {

    const [open] = useState(true);

    return (
        <section className='flex'>
        <div className={`bg-[#0F1035] min-h-screen ${
            open ? "w-64" : "w-16"
            } duration-500 text-white px-4`}>
            <div>
                <div className='py-3 flex justify-center'>
                    <img src='../asset/Logoo.png' width={130}/>
                </div>
                <div className='mt-4 flex flex-col gap-4 relative'>
                    {menus?.map((menu, i) => (
                        <Link to={menu?.link}
                            key={i}
                            className={` ${
                                menu?.margin && "mt-5"}
                                flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-600 rounded-md`}
                                >
                            <div>{React.createElement(menu?.icon, {size: "20"})}</div>
                            <h2>{menu?.name}</h2>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    </section>
      )
}

export default AdminSidebar
