export const FormatStringArray = (Array) => {
  const text = Array.map(art => art.name).join(', ');
  return text;
}

export const FormatMinutesTohours = (min) => {

  function pad(n, z = 1) {
    z = z || 2;
    return ('00' + n).slice(-z);
  }

  const num = min;
  const hours = (num / 60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours} Hour${rhours > 1 ? 's' : ''} with ${rminutes} minute${rminutes > 1 ? 's' : ''}`;
}