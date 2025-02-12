export function msToHMS(ms: number) {
  let seconds = ms / 1000;
  const numHours = Math.floor(seconds / 3600);
  const hours = numHours ? numHours.toString() + ":" : "";
  seconds = seconds % 3600;
  const minutes = Math.floor(seconds / 60).toString();
  const secondsNum = Math.floor(seconds % 60).toString();
  const secondString = secondsNum.length === 1 ? "0" + secondsNum : secondsNum;

  return hours + minutes + ":" + secondString;
}

export function formatDate(data: string) {
  const date = new Date(data);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getUTCFullYear();

  return `${day}/${month + 1}/${year}`;
}

export const formatTime = (value: number) => {
  const totalSeconds = Math.round(value);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60; // Get the remainder after dividing by 60

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
