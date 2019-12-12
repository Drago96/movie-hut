const formatHour = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const actualMinutes = minutes % 60;

  return `${hours}h ${actualMinutes}min`;
};

export default formatHour;
