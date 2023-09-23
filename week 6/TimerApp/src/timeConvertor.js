export function formatToSeconds(timeFormat) {
    const hours = timeFormat[0] * 10 + timeFormat[1];
    const minutes = timeFormat[2] * 10 + timeFormat[3];
    const MilliSeconds =
      ((timeFormat[4] * 10000) + (timeFormat[5] * 1000) + (timeFormat[6] * 100) + (timeFormat[7] * 10) + (timeFormat[8]))
    const totalMillisecondSeconds = hours * 3600000 + minutes * 60000 + MilliSeconds;
    return totalMillisecondSeconds;
  }
  
export function millisecondsToArray(milliseconds) {
    const hours = Math.floor(milliseconds / 3600000);
    milliseconds %= 3600000;
    const minutes = Math.floor(milliseconds / 60000);
    milliseconds %= 60000;
    const MilliSeconds = milliseconds;
    const timeArray = [
      Math.floor(hours / 10),
      hours % 10,
      Math.floor(minutes / 10),
      minutes % 10,
      Math.floor(MilliSeconds / 10000),
      Math.floor((MilliSeconds % 10000) / 1000),
      Math.floor((MilliSeconds % 1000) / 100),
      Math.floor((MilliSeconds % 100) / 10),
      MilliSeconds % 10,
    ];
  
    return timeArray;
  }

