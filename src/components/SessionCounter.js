import React, { useState } from 'react';
import { Text, Box, Button } from '@chakra-ui/react';

function SessionCounter() {
  const [sessionCount, setSessionCount] = useState(0);

  function incrementSession() {
    setSessionCount(sessionCount + 1);
  }

  return (
    <Box mt={4}>
      <Text>{`Session Count: ${sessionCount}`}</Text>
      <Button onClick={incrementSession}>
        Increment Session
      </Button>
    </Box>
  );
}

export default SessionCounter;
