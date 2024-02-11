import React, { useState } from 'react';
import { Button, HStack } from '@chakra-ui/react';

function BreakSession({setBreakDuration}) {
  const [isShortBreak, setIsShortBreak] = useState(true);

  function setShortBreak() {
    setIsShortBreak(true);
    setBreakDuration(5);
  }

  function setLongBreak() {
    setIsShortBreak(false);
    setBreakDuration(15);
  }

  return (
    <HStack mt={4}>
      <Button colorScheme='teal' variant={isShortBreak ? 'solid' : 'outline'} onClick={setShortBreak}>
        Short Break
      </Button>
      <Button colorScheme='yellow' variant={!isShortBreak ? 'solid' : 'outline'} onClick={setLongBreak}>
        Long Break
      </Button>
    </HStack>
  );
}

export default BreakSession;
