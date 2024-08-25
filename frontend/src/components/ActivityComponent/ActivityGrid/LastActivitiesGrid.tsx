

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
  Box
} from '@mui/material';
import { SwapVert, ContentCopy } from '@mui/icons-material';
import { Activity } from './DummyActivityData';

type ActivityGridProps = {
    activities: Activity[];
}

const ActivityGrid: React.FC<ActivityGridProps> = ({ activities } : ActivityGridProps) => {
  return (
    <Box sx={{ bgcolor: 'background.paper', color: 'text.primary', borderRadius: 2, p: 3 }}>
      <Typography variant="h6" gutterBottom component="div">
        Last Activities
      </Typography>
      <TableContainer component={Paper} sx={{ bgcolor: 'background.paper' }}>
        <Table sx={{ minWidth: 650 }} aria-label="activity table">
          <TableHead>
            <TableRow>
              <TableCell>Activities</TableCell>
              <TableCell align="right">Points</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">TXID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map((activity, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
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
                <TableCell align="right" sx={{ color: 'success.main' }}>+{activity.points}</TableCell>
                <TableCell align="right">{activity.date}</TableCell>
                <TableCell align="right">
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {activity.txid}
                    <IconButton size="small" sx={{ ml: 1 }}>
                      <ContentCopy fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ActivityGrid