import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export default function CustomSidebar() {
    return (
        <Sidebar className="w-64 h-screen bg-blue-700 p-4">
            <Menu
                menuItemStyles={{
                    button: {
                        // the active class will be added automatically by react router
                        // so we can use it to style the active menu item
                        [`&.active`]: {
                            backgroundColor: '#13395e',
                            color: '#b6c8d9',
                        },
                    },
                }}
            >
                <MenuItem>
                    <Link to="/dashboard" className="block py-2 px-4 rounded-md text-orange-500 no-underline ease-in-out duration-200">
                        Dashboard
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/users" className="block py-2 px-4 rounded-md text-orange-500 no-underline ease-in-out duration-200">
                        Users
                    </Link>
                </MenuItem>
            </Menu>
        </Sidebar>
    );
}
