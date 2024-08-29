
import { Button, Flex, Layout, notification, Typography } from 'antd';

import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../constants/paths';
import { Box } from '@mui/material';


const { Header } = Layout;

type NavItem = {
  path: string;
  label: string;
};

const navItems: NavItem[] = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/tasks', label: 'Tasks' },
  { path: '/badges', label: 'Badges' },
  { path: '/leaderboard', label: 'Leaderboard' },
  { path: '/connections', label: 'Connections' },
];


const AppHeader: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('/badges');
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const navigateHook = useNavigate();

  const navigate = (path: string) => {
    console.log(`Navigating to ${path}`);
    navigateHook(path);
    setActiveTab(path);
    setIsMenuOpen(false);
    // Implement your navigation logic here
  };

  const NavItems = () => {
   return ( <>
        {navItems.map((item) => (
          <Button type="link" onClick={() => navigate(item.path)} className={item.path == activeTab ? 'text-success-elevation2' :'text-text-primary'}>{item.label}</Button>
        ))}
    </>)
  }
  return (
    <Header className='bg-primary-background text-text-primary hover:bg-primary-background'>
      <Flex justify="space-between" align="center">
      <div>
        {/* Logo */}
        <Button className='bg-elevation1 rounded-[8px] m-2 pl-6 pr-6 text-center text-text-primary border-elevation3'>
          Logo
        </Button>
      </div>
      {isMobile ? (
          <div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
              ☰
            </button>
            {isMenuOpen && (
              <nav className="absolute top-16 right-0 bg-blue-600 p-4 w-48">
                <NavItems/>
              </nav>
            )}
          </div>
        ) :
      (<div>
        {/* Navigation Buttons */}
        <NavItems />
        </div>)}
      <div className='flex item-center'>
        {/* Login/Signin Buttons */}
        <Button type="primary" className='bg-primary-background rounded-[24px] h-10 mr-2 border-1 border-success-elevation2'>How It Works</Button>
        <div className='flex items-center bg-elevation1 pl-2 pr-2 rounded-[8px]'>
          <img src='https://via.placeholder.com/150' alt='profile' className='rounded-full w-4' />
          <Typography.Text className='text-text-primary ml-1'>John Doe</Typography.Text>
        </div>
      </div>
      </Flex>
    </Header>
    );
};

export default React.memo(AppHeader);
