export const formatRuntime = (runtime) => {
  let result;
  if (runtime / 60 > 1) {
    let hours = runtime / 60;
    let flooredHours = Math.floor(hours);
    let minutes = Math.round((hours - flooredHours) * 60);
    result = `${flooredHours}h ${minutes}min`;
  } else result = `${runtime} min`;
  return result;
};
