import React from 'react';
import { Box, Card, CardContent, Typography, IconButton, Tooltip } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Badge } from '../../types/badge.type';
import BadgeCard from './BadgeCard';

type BadgeScrollProp = {
    badges: Badge[];
};

const BadgeScroll: React.FC<BadgeScrollProp> = ({ badges } : BadgeScrollProp) => {
    const scrollRef = React.useRef<HTMLDivElement | null>(null);
  
    const scroll = (scrollOffset: number) => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += scrollOffset;
      }
    };
  
    return (
      <Box sx={{ position: 'relative', my: 4 }}>
        <Typography variant="h6" gutterBottom>
          Community Badges
        </Typography>
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {badges.map((badge, index) => (
            <BadgeCard key={index} {...badge} />
          ))}
        </Box>
        <IconButton
          sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
          onClick={() => scroll(-200)}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
          onClick={() => scroll(200)}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    );
  };
  
  export default BadgeScroll;