import { useState } from "react";
import { Badge } from "../../types/badge.type";
import { Box, styled, Typography } from "@mui/material";


const BadgeItem = styled(Box)(({ theme }) => ({

    textAlign: 'center',
    minWidth: 'max-content',
    cursor: 'pointer',
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
    onClick?: () => void;
  };

  const BadgeCard: React.FC<BadgeCardProps> = ({ badge, onClick }: BadgeCardProps) => {
    const completedActions = badge.actions.filter((action) => action.completeStatus).length;
    const totalActions = badge.actions.length;
  
    return (
      <BadgeItem className="!text-text-primary !mr-1 !mb-1" onClick={() =>{onClick && onClick();}} >
        
        <Box className={(completedActions==totalActions ? 'border-text-success' : 'border-elevation3') + ' border bg-elevation1 rounded-[8px] min-w-20'}>
            <div  className=" bg-elevation2 rounded-t-[8px] text-left  p-1 flex justify-between items-center w-full">
                <div className="text-sm ">
                    {badge.title}
                </div>
                <div className="text-right text-xs text-text-secondary">
                    {badge.actions.length} actions
                </div>
            </div>
            <div className="badge-icon pt-2 pb-2 mr-4 ml-4">
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