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
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '16px',
  });
type Props = {
    actions: Action[];
    title: string;
}

const ScrollableContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    overflowX: 'auto',
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
        <Box >
            <Typography variant="h6" gutterBottom>
                {props.title} Actions
            </Typography>
           
            
            <ScrollableContainer>
            {props.actions.map((action, index) => (
                <ActionCard key={index}>
                <ActionContent>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                    Action {index + 1}
                    </Typography>
                   <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                   <Typography variant="body1" sx={{ mb: 2 }}>
                    {action.description}
                    </Typography>
                    {action.completeStatus && <Check color="success" />}
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