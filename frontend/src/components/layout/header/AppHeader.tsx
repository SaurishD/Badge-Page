
import { Button, Flex, Layout, notification } from 'antd';

import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../constants/paths';


const { Header } = Layout;


const AppHeader: React.FC = () => {
  const navigate = useNavigate();

  
  return (
    <Header>
      <Flex justify="space-between" align="center">
      <div>
        {/* Logo */}
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <div>
        {/* Navigation Buttons */}
        <Button type="link" onClick={() => navigate(PATHS.dashboard())}>Dashboard</Button>
        <Button type="link" onClick={() => navigate(PATHS.tasks())}>Tasks</Button>
        <Button type="link" onClick={() => navigate(PATHS.badges())}>Badges</Button>
        <Button type="link" onClick={() => navigate(PATHS.leaderboard())}>Leaderboard</Button>
        <Button type="link" onClick={() => navigate(PATHS.connections())}>Connections</Button>
      </div>
      <div>
        {/* Login/Signin Buttons */}
        <Button type="primary" onClick={() => {}}>How It Works</Button>
        <Button type="default" onClick={() => {}}>bongo.eth</Button>
      </div>
      </Flex>
    </Header>
    );
};

export default React.memo(AppHeader);
