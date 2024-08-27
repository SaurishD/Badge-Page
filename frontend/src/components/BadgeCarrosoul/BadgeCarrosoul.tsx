import React, { useState } from 'react';
import Slider from "react-slick";
import { Box, Typography, styled, IconButton, Button } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Badge } from '../../types/badge.type';
import ActionCards from './ActionCards/ActionCards';
import CarouselCard from '../Cards/CarouselCard';


const ArrowButton = styled(Button)(({ theme }) => ({
    position: 'absolute',
    height: '100%',
    borderRadius: '32px',
    zIndex: 1,
  }));
  
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <ArrowButton onClick={onClick} className='!bg-elevation1 '>
        <ChevronLeft className="!w-10 !h-10 !text-text-primary "/>
      </ArrowButton>
    );
  };
  
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <ArrowButton onClick={onClick} sx={{ right: 0 }} className='top-[0%] !bg-elevation1'>
        <ChevronRight className="!w-10 !h-10 !text-text-primary "/>
      </ArrowButton>
    );
  };


const BadgeCarousel: React.FC<{ badges: Badge[] }> = ({ badges }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      speed: 500,
      beforeChange: (current: number, next: number) => setActiveSlide(next),
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            centerPadding: "40px",
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            centerPadding: "20px",
          }
        }
      ]
    };
  
    const activeBadge = badges[activeSlide];
    const completedActions = activeBadge.actions.filter(action => action.completeStatus).length;
    const totalActions = activeBadge.actions.length;
    const progress = (completedActions / totalActions) * 100;
  
  
    return (
      <Box sx={{ my: 4, px: 2, position: 'relative' }} className='bg-elevation3 rounded-[8px] pt-2'>
        <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
          Badges
        </Typography>
        <Slider {...settings}>
          {badges.map((badge, index) => (
           <CarouselCard key={index} badge={badge} isActive={index == activeSlide} />
          ))}
        </Slider>
        <Box className='flex justify-between items-center mt-2'>
          <Box className='flex'>
            <Typography variant="body2" className='text-text-primary'>
              How to Earn:
            </Typography>
            <Typography variant="body2" className='text-text-secondary text-left !ml-1'>
              Complete the action for the badge, no specific order
            </Typography>
          </Box>
          <Box  className='text-right flex text-text-primary' >
            <Box className='mr-1 bg-elevation1 pl-2 pr-2 text-center rounded-[16px]'>
            <Typography variant="body2" className='text-text-secondary'>
              {completedActions}/{totalActions} completed
            </Typography>
            </Box>
            <Box>
            <Typography variant="body2" className='mr-1 bg-success-elevation pl-2 pr-2 text-center rounded-[16px]'>
              Total Earnings: {activeBadge.points}
            </Typography>
            </Box>

          </Box>
        </Box>
        <ActionCards actions={activeBadge.actions} title={activeBadge.description} />
        
      </Box>


    );
  };
  

export default BadgeCarousel;