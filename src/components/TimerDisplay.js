import React from 'react';
import { Text, Box } from '@chakra-ui/react';

function TimerDisplay({ minutes, seconds }) {
  return (
    <Box>
      <Text fontSize='6xl' fontWeight='bold'>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</Text>
    </Box>
  );
}

export default TimerDisplay;