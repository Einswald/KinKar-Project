//import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../views/SideBar';
import Header from '../views/Header';

export default function DefaultLayout () {
    return (
        <div>
            <div className='flex'>
                <Sidebar />
                <Header />
            </div>
            <div className=''>

            </div>
            <div>
                <Outlet/>
            </div>
            <Outlet/>
        </div>
    );
}
