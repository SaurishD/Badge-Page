import { useState } from "react";
import { Badge } from "../../types/badge.type";
import { Box, styled, Typography } from "@mui/material";


const BadgeItem = styled(Box)<{ isActive: boolean }>(({ theme, isActive }) => ({

    textAlign: 'center',
    minWidth: 'max-content',
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

  type BadgeCardProps = {
    badge: Badge;
    isActive: boolean;
  };

  const BadgeCard: React.FC<BadgeCardProps> = ({ badge, isActive}: BadgeCardProps) => {
    
  
    return (
      <BadgeItem isActive={isActive} className="!text-text-primary !mr-1 !mb-1">
        
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
       
      </BadgeItem>
    );
  }

  export default BadgeCard;