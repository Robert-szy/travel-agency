

export const formatTime = (timeInSeconds) => {
  if(!timeInSeconds || isNaN(timeInSeconds) || timeInSeconds<0){
    return null;
  } else {
    let pad = function(num, size) { return ('000' + num).slice(size * -1); },
      time = parseFloat(timeInSeconds).toFixed(3),
      hours = Math.floor(time / 60 / 60),
      minutes = Math.floor(time / 60) % 60,
      seconds = Math.floor(time - minutes * 60);

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
  }

};
