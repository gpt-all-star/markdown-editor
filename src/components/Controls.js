import React from 'react';
import { Button, HStack } from '@chakra-ui/react';

function Controls({ startTimer, pauseTimer, resetTimer }) {
  return (
    <HStack mt={4}>
      <Button colorScheme='teal' variant='outline' onClick={startTimer}>
        Start
      </Button>
      <Button colorScheme='yellow' variant='outline' onClick={pauseTimer}>
        Pause
      </Button>
      <Button colorScheme='red' variant='outline' onClick={resetTimer}>
        Reset
      </Button>
    </HStack>
  );
}

export default Controls;