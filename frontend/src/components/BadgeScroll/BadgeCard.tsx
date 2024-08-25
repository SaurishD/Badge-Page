

import React from 'react';
import { Box, Card, CardContent, Typography, IconButton, Tooltip } from '@mui/material';
import type { Badge } from '../../types/badge.type';


const BadgeCard = ({ icon, title, description, points }: Badge) => (
    <Card sx={{ minWidth: 200, maxWidth: 200, m: 1, bgcolor: 'background.paper', color: 'text.primary' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          {icon}
        </Box>
        <Typography variant="h6" component="div" align="center">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
          {description}
        </Typography>
        <Typography variant="body2" align="center" color="success.main">
          {points}
        </Typography>
      </CardContent>
    </Card>
  );

  export default BadgeCard;