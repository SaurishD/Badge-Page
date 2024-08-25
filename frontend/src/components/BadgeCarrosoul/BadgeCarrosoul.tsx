import React, { useState } from 'react';
import Slider from "react-slick";
import { Box, Typography, styled, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Badge } from '../../types/badge.type';
import ActionCards from './ActionCards/ActionCards';

const CarouselItem = styled(Box)<{ isActive: boolean }>(({ theme, isActive }) => ({
  transition: 'all 0.3s ease',
  opacity: isActive ? 1 : 0.5,
  transform: isActive ? 'scale(1.1)' : 'scale(0.9)',
  textAlign: 'center',
  '& .badge-icon': {
    width: 60,
    height: 60,
    margin: '0 auto 16px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.background.paper,
  },
  '& .badge-title': {
    color: theme.palette.text.primary,
    marginBottom: 4,
  },
  '& .badge-subtitle': {
    color: theme.palette.text.secondary,
    marginBottom: 8,
  },
  '& .badge-points': {
    color: theme.palette.success.main,
  },
}));

const ArrowButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    color: theme.palette.text.primary,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
  }));
  
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <ArrowButton onClick={onClick} sx={{ left: -20 }}>
        <ChevronLeft />
      </ArrowButton>
    );
  };
  
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <ArrowButton onClick={onClick} sx={{ right: -20 }}>
        <ChevronRight />
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
      <Box sx={{ my: 4, px: 2, position: 'relative' }}>
        <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
          Badges
        </Typography>
        <Slider {...settings}>
          {badges.map((badge, index) => (
            <CarouselItem key={index} isActive={index === activeSlide}>
              <div className="badge-icon">
                {badge.icon}
              </div>
              <Typography variant="subtitle1" className="badge-title">
                {badge.title}
              </Typography>
              <Typography variant="body2" className="badge-subtitle">
                {badge.description}
              </Typography>
              <Typography variant="body2" className="badge-points">
                {badge.points}
              </Typography>
            </CarouselItem>
          ))}
        </Slider>
        <ActionCards actions={activeBadge.actions} title={activeBadge.description} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, color: 'text.secondary' }}>
          <Typography variant="body2">
            How to Earn: Complete the actions for the badge, no specific order needed.
          </Typography>
          <Typography variant="body2">
            1/3 Completed&nbsp;&nbsp;&nbsp;Total Earnings: 3,000
          </Typography>
        </Box>
      </Box>


    );
  };
  

export default BadgeCarousel;