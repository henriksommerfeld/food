export function formatDuration(
  days: number,
  hours: number,
  minutes: number
): string {
  const timeParts = [
    formatDays(days),
    formatHours(hours),
    formatMinutes(minutes),
  ].filter((x) => x);

  return timeParts.join(', ');
}

function formatDays(days: number): string {
  if (days === 1) return `1 dag`;
  if (days > 1) return `${days} dagar`;
  return '';
}

function formatHours(hours: number): string {
  if (hours === 1) return `1 timme`;
  if (hours > 1) return `${hours} timmar`;
  return '';
}

function formatMinutes(minutes: number): string {
  if (minutes === 1) return `1 minut`;
  if (minutes > 1) return `${minutes} minuter`;
  return '';
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
