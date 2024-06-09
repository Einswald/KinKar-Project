import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

function Admin() {
  return (
    <>
        <div className='flex flex-row h-screen w-screen overflow-hidden'>
            <AdminSidebar />
            <div className='flex flex-col flex-1'>
                <AdminHeader />
                <div className='flex-1 overflow-auto w-full'>
                    <Outlet />
                </div>
            </div>
        </div>
    </>
  )
}

export default Admin
