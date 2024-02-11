// Helper function to format time display in MM:SS format
export function formatTime(minutes, seconds) {
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Helper function for the timer countdown logic
export function countdown(minutes, seconds) {
  let newSeconds = seconds;
  let newMinutes = minutes;

  if(seconds > 0) {
    newSeconds = seconds - 1;
  }
  if(seconds === 0) {
    if(minutes === 0) {
      newMinutes = 0;
    } else {
      newMinutes = minutes - 1;
      newSeconds = 59;
    }
  }

  return {newMinutes, newSeconds};
}
