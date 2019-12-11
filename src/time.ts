export function parseTwitterTime(time: string): number {
  return Date.parse(time);
}

export function formatTime(timestamp: number): string {
  const invalidDateResponse = '';
  if (!timestamp) return invalidDateResponse;

  try {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const months = [
      'januari',
      'februari',
      'mars',
      'april',
      'maj',
      'juni',
      'juli',
      'augusti',
      'september',
      'oktober',
      'november',
      'december',
    ];
    const month = dateObject.getMonth();
    const day = dateObject.getDate();
    const hours = ensureLeadingZeros(dateObject.getHours(), 2);
    const minutes = ensureLeadingZeros(dateObject.getMinutes(), 2);

    const isToday =
      currentYear === year && currentMonth === month && currentDay === day;
    const yearToShow = currentYear === year ? '' : `${year}`;
    const monthToShow = isToday ? '' : months[month];
    const dayToShow = isToday ? 'i dag' : `${day}`;

    return `${dayToShow} ${monthToShow} ${yearToShow} ${hours}:${minutes}`;
  } catch (error) {
    return invalidDateResponse;
  }
}

function ensureLeadingZeros(time: number, length: number): string {
  return `${time}`.padStart(length, '0');
}
