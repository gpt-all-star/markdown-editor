import React, { useState, useEffect } from 'react';
import Controls from './Controls';
import { Text, Box } from '@chakra-ui/react';
import { formatTime, countdown } from '../utilities/helperFunctions';

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function startTimer() {
    setIsActive(true);
  }

  function pauseTimer() {
    setIsActive(false);
  }

  function resetTimer() {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  }

  useEffect(() => {
    let interval = null;
    if(isActive) {
      interval = setInterval(() => {
        const {newMinutes, newSeconds} = countdown(minutes, seconds);
        setMinutes(newMinutes);
        setSeconds(newSeconds);
      }, 1000);
    } else if(!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <Box>
      <Text>{formatTime(minutes, seconds)}</Text>
      <Controls startTimer={startTimer} pauseTimer={pauseTimer} resetTimer={resetTimer} />
    </Box>
  );
}

export default Timer;
