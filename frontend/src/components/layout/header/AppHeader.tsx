
import { Button, Flex, Layout, notification, Typography } from 'antd';

import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../constants/paths';
import { Box } from '@mui/material';


const { Header } = Layout;


const AppHeader: React.FC = () => {
  const navigate = useNavigate();

  
  return (
    <Header className='bg-primary-background text-text-primary hover:bg-primary-background'>
      <Flex justify="space-between" align="center">
      <div>
        {/* Logo */}
        <Button className='bg-elevation1 rounded-[8px] m-2 pl-6 pr-6 text-center text-text-primary border-elevation3'>
          Logo
        </Button>
      </div>
      <div>
        {/* Navigation Buttons */}
        <Button type="link" onClick={() => navigate(PATHS.dashboard())} className='text-text-primary'>Dashboard</Button>
        <Button type="link" onClick={() => navigate(PATHS.tasks())} className='text-text-primary'>Tasks</Button>
        <Button type="link" onClick={() => navigate(PATHS.badges())} className='text-text-primary'>Badges</Button>
        <Button type="link" onClick={() => navigate(PATHS.leaderboard())} className='text-text-primary'>Leaderboard</Button>
        <Button type="link" onClick={() => navigate(PATHS.connections())} className='text-text-primary'>Connections</Button>
      </div>
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
