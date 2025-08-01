import React from 'react';
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { 
  UserCircleIcon, 
  PowerIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/24/solid";
import { useAuth } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { getRoleDisplayName, getPrimaryRole } from '../../utils/auth/roleNavigation';
import { logout } from '../../utils/auth/logout';

const DashboardHeader: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(signOut, navigate);
  };

  const primaryRole = user ? getPrimaryRole(user.roles) : null;
  const roleDisplayName = primaryRole ? getRoleDisplayName(primaryRole) : 'User';

  return (
    <Navbar
      className="mx-4 mt-4 rounded-xl border border-blue-gray-100 bg-white px-4 py-2 shadow-md"
      blurred={false}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Typography variant="h6" color="blue-gray" className="mr-4">
            CRM Dashboard
          </Typography>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Quick Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Button size="sm" variant="text" className="flex items-center gap-2">
              <InboxArrowDownIcon className="h-4 w-4" />
              Add Lead
            </Button>
          </div>

          {/* User Menu */}
          <Menu placement="bottom-end">
            <MenuHandler>
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2 rounded-full py-0.5 pr-2 pl-0.5"
              >
                <Avatar
                  variant="circular"
                  size="sm"
                  alt={user?.fullName || "User"}
                  className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-0.5"
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user?.fullName || 'User')}&background=random`}
                />
                <div className="text-left hidden md:block">
                  <Typography variant="small" className="font-medium">
                    {user?.fullName || 'User'}
                  </Typography>
                  <Typography variant="small" color="gray" className="text-xs">
                    {roleDisplayName}
                  </Typography>
                </div>
              </Button>
            </MenuHandler>
            <MenuList className="p-1">
              <MenuItem className="flex items-center gap-2 rounded">
                <UserCircleIcon className="h-4 w-4" strokeWidth={2} />
                <Typography as="span" variant="small" className="font-normal">
                  My Profile
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-2 rounded">
                <Cog6ToothIcon className="h-4 w-4" strokeWidth={2} />
                <Typography as="span" variant="small" className="font-normal">
                  Settings
                </Typography>
              </MenuItem>
              <hr className="my-2 border-blue-gray-50" />
              <MenuItem 
                className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                onClick={handleLogout}
              >
                <PowerIcon className="h-4 w-4 text-red-500" strokeWidth={2} />
                <Typography as="span" variant="small" className="font-normal text-red-500">
                  Sign Out
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </Navbar>
  );
};

export default DashboardHeader;