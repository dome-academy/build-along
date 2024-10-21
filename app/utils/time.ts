export function getTimeDifference(futureTime: number, tTime: number) {
  return futureTime - tTime;
}

export function isPast(dateStr: string) {
  const today = new Date().getTime();
  const tDay = new Date(dateStr).getTime();
  return getTimeDifference(today, tDay) > 0;
}
