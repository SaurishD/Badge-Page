

import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  IconButton, 
  Typography,
  Box,
  styled
} from '@mui/material';
import { SwapVert, OpenInNew } from '@mui/icons-material';
import { Activity } from './DummyActivityData';

type ActivityGridProps = {
    activities: Activity[];
}

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  color: theme.palette.text.primary, // Or use your custom color
  '& .MuiTableCell-root': {
    color: 'inherit',
  },
}));

const StyledTable = styled(Table)(({ theme }) => ({
  '& .MuiTableCell-root': {
    borderBottom: 'none',
  },
  '& .MuiTableRow-root': {
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  },
}));

const ActivityGrid: React.FC<ActivityGridProps> = ({ activities } : ActivityGridProps) => {
  return (
    <Box  sx={{ borderRadius: 3, p: 3 }} >
      <Typography variant="h6" gutterBottom component="div">
        Last Activities
      </Typography>
      <StyledTableContainer className='rounded-[8px] max-h-[700px] custom-scrollbar'>
        <StyledTable sx={{ minWidth: 650 }} aria-label="activity table" >
          <TableHead className='bg-elevation1 text-text-secondary'>
            <TableRow>
              <TableCell >Activities</TableCell>
              <TableCell align="right">Points</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">TXID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className='text-text-primary'>
            {activities.map((activity, index) => (

              <TableRow
                key={index}
              className={index%2 ? 'bg-elevation3' : 'bg-elevation2'}>
                <TableCell component="th" scope="row">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {activity.type === 'Transaction' ? (
                      <SwapVert sx={{ mr: 1 }} />
                    ) : (
                      <SwapVert sx={{ mr: 1, transform: 'rotate(90deg)' }} />
                    )}
                    {activity.type}
                  </Box>
                </TableCell>
                <TableCell align="right"  className='!text-right' ><Box className='bg-success-elevation p-1 text-text-success rounded-[16px] w-fit'>+{activity.points}</Box></TableCell>
                <TableCell align="right">{activity.date}</TableCell>
                <TableCell align="right">
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {activity.txid}
                    <IconButton size="small" sx={{ ml: 1 }} className='!text-text-primary'>
                      <OpenInNew fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </Box>
  );
};

export default ActivityGrid