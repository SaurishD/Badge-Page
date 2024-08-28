import { useState } from "react";
import { Badge } from "../../types/badge.type";
import { Box, styled, Typography } from "@mui/material";


const CarouselItem = styled(Box)<{ isActive: boolean }>(({ theme, isActive }) => ({
    transition: 'all 0.3s ease',
    opacity: isActive ? 1 : 0.5,
    transform: isActive ? 'scale(1.1)' : 'scale(0.9)',
    textAlign: 'center',
    margin: '20px 10px',
    '& .badge-icon': {
      width: 60,
      height: 60,
      margin: '16px auto 16px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme.palette.background.paper,
    },
  }));

  type CarouselCardProps = {
    badge: Badge;
    isActive: boolean;
  };

  const CarouselCard: React.FC<CarouselCardProps> = ({ badge, isActive}: CarouselCardProps) => {
    
  
    return (
      <CarouselItem isActive={isActive} className="!text-text-primary">
        
        <Box className='bg-elevation1 rounded-[8px]'>
            <div  className=" bg-elevation2 rounded-t-[8px] text-left  p-1 flex justify-between items-center w-full">
                <div className="text-[13px]">
                    {badge.title}
                </div>
                <div className="text-right text-[11px] text-text-secondary">
                    {badge.actions.length} actions
                </div>
            </div>
            <div className="badge-icon pt-2 pb-2">
            {badge.icon}
            </div>
            <div  className="badge-points bg-success-elevation text-text-success rounded-b-[8px] pt-1 pb-1 font-medium text-sm">
            {badge.points} Points
            </div>
        </Box>
        <Box className="mb-4 mt-2 p-2 bg-elevation2 rounded-[8px] text-sm">
            <div>
                Reward Details
            </div>
            <div className="text-text-secondary">
                {badge.description}
            </div>  
        </Box>
       
      </CarouselItem>
    );
  }

  export default CarouselCard;