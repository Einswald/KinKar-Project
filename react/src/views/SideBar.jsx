import React, { useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import { GoGoal } from 'react-icons/go';
import { RiSurveyFill } from 'react-icons/ri';
import { FaHistory } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const menus =[
        {name:"Dashboard",link:'/',icon: MdDashboard},
        {name:"Goals",link:'/goals',icon: GoGoal, margin: true},
        {name:"Surveys",link:'/surveys',icon: RiSurveyFill},
        {name:"Historys",link:'/historys',icon: FaHistory },
    ];

  return (
    <section className='flex'>
        <div className={`bg-[#0F1035] min-h-screen ${
            open ? "w-72" : "w-16"
            } duration-500 text-white px-4`}>
            <div>
                <div className='py-3 flex justify-center'>
                    <img src='./asset/Logoo.png' width={130}/>
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

export default SideBar
