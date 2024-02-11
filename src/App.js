import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Timer from './components/Timer';
import SessionCounter from './components/SessionCounter';
import BreakSession from './components/BreakSession';

function App() {
  const [breakDuration, setBreakDuration] = useState(5);

  return (
    <Box p={5}>
      <Timer breakDuration={breakDuration} />
      <SessionCounter />
      <BreakSession setBreakDuration={setBreakDuration} />
    </Box>
  );
}

export default App;
