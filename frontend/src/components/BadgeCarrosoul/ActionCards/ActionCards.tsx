import { Action } from "../../../types/badge.type";
import React from 'react';
import Slider from "react-slick";
import { Box, Typography, styled, Card, CardContent, LinearProgress } from '@mui/material';
import { Check } from '@mui/icons-material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const ActionCard = styled(Card)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    width: 'calc(33.333% - 16px)',
    marginRight: theme.spacing(2),
    flexShrink: 0,
    position: 'relative',
    '&::after': {
      content: '""',
      display: 'block',
    },
  }));
  
  const ActionContent = styled(CardContent)({
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    
   
    padding: 0
  });
type Props = {
    actions: Action[];
    title: string;
}

const ScrollableContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    overflowX: 'auto',
    marginTop: '10px',
    scrollbarWidth: 'none', // For Firefox
    '&::-webkit-scrollbar': {
      display: 'none', // For Chrome, Safari, and Opera
    },
    '-ms-overflow-style': 'none', // For Internet Explorer and Edge
    scrollSnapType: 'x mandatory',
    '& > *': {
      scrollSnapAlign: 'start',
    },
    paddingBottom: theme.spacing(2), // Add some padding at the bottom
  }));
  

const ActionCardsScroll: React.FC<Props> = (props: Props) => {
    const completedActions = props.actions.filter(action => action.completeStatus).length;
    const totalActions = props.actions.length;
    const progress = (completedActions / totalActions) * 100;

    


    return (
        <Box className='pb-2'>
            <ScrollableContainer>
            {props.actions.map((action, index) => (
                <ActionCard key={index}>
                <ActionContent className="text-text-secondary rounded-[8px]">
                   <Box className="bg-elevation1 w-[100%] pt-1 pb-1 pl-2 flex justify-between text-left rounded-t-[inherit] ">
                   <Typography variant="body2" >
                    Action
                    </Typography>
                    {
                    action.completeStatus ? (
                      <Box className='bg-success-elevation text-right text-text-success text-xs mr-2 p-1 rounded-[16px] w-fit' >
                        Completed
                      </Box>
                    ) : <></>
                   }
                   </Box>
                   
                   <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                   <Typography className="!ml-1 mt-1 !text-sm">
                    {action.description}
                    </Typography>
                    
                    </Box>
                </ActionContent>
                </ActionCard>
            ))}
        </ScrollableContainer>
        <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />
        </Box>
    );
}

export default ActionCardsScroll;