import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import { Box, Typography, styled, IconButton, Button } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Badge } from '../../types/badge.type';
import ActionCards from './ActionCards/ActionCards';
import CarouselCard from '../Cards/CarouselCard';
import { set } from 'lodash';


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


const BadgeCarousel: React.FC<{ badges: Badge[], activeBadgeIndex: number }> = ({ badges, activeBadgeIndex } : { badges: Badge[], activeBadgeIndex: number }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeBadge, setActiveBadge] = useState<Badge | null>(null);
    const sliderRef = useRef<Slider>(null)
    
    useEffect(() => {
      if(sliderRef.current){
        sliderRef.current.slickGoTo(activeBadgeIndex);
        setActiveBadge(badges[activeBadgeIndex]);
        
      }
    } , [activeBadgeIndex]);

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      speed: 500,
      beforeChange: (current: number, next: number) => {setActiveSlide(next); setActiveBadge(badges[next])},
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
  
    const completedActions = activeBadge ? activeBadge.actions.filter(action => action.completeStatus).length : 0;
    const totalActions = activeBadge ? activeBadge.actions.length :0;
    // const progress = (completedActions / totalActions) * 100;
  
  
    return (
      <Box sx={{ my: 4, px: 2, position: 'relative' }} className='bg-elevation3 rounded-[8px] pt-2'>
        <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
          Badges
        </Typography>
        <Slider ref={sliderRef} {...settings}>
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
              Total Earnings: {activeBadge ? activeBadge.points: 0}
            </Typography>
            </Box>

          </Box>
        </Box>
        <ActionCards actions={activeBadge ? activeBadge.actions : []} title={activeBadge? activeBadge.description : 'Loading'} />
        
      </Box>


    );
  };
  

export default BadgeCarousel;