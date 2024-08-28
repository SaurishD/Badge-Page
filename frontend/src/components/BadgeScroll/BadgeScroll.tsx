import React from 'react';
import { Box, Card, CardContent, Typography, IconButton, Tooltip } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Badge } from '../../types/badge.type';
import BadgeCard from '../Cards/BadgeCard';

type BadgeScrollProp = {
    badges: Badge[];
};

const BadgeScroll: React.FC<BadgeScrollProp> = ({ badges } : BadgeScrollProp) => {
   
  
    return (
      <Box sx={{ position: 'relative' }} className="!mb-[6rem] bg-elevation1 rounded-[8px]">
        <Typography variant="body1" className='pt-2 pl-2'>
          Community Badges
        </Typography>
        <Box className='flex overflow-x-auto p-2 custom-scrollbar' >
          {badges.map((badge, index) => (
            <BadgeCard badge={badge} isActive={false} />
          ))}
        </Box>
        
      </Box>
    );
  };
  
  export default BadgeScroll;