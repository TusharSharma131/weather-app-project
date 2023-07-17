import { Typography } from '@mui/material';
import React from 'react';
import { getIndianDatetime } from '../../utilities/DatetimeUtils';

const IndianDatetime = () => {
  const IndianFullDate = getIndianDatetime();
  const IndianTimeValue = (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: '400',
        fontSize: { xs: '10px', sm: '12px' },
        color: 'rgba(255, 255, 255, .7)',
        lineHeight: 2,
        paddingRight: '2px',
        fontFamily: 'Poppins',
      }}
    >
      {IndianFullDate} IST
    </Typography>
  );
  return IndianTimeValue;
};

export default IndianDatetime;
