// import { LevelQuest } from './const';

const getFormatHoursAndMinutes = (time: number) => {

  if (time >= 60) {
    const hours = Math.floor(time / 60);
    const minutes = time - hours * 60;
    return `${hours}h ${minutes}m`;
  } else {
    return `${time}m`;
  }
};


export { getFormatHoursAndMinutes };
