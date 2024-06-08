export function formatDuration(days: number, hours: number, minutes: number): string {
  const timeParts = [formatDays(days), formatHours(hours), formatMinutes(minutes)].filter((x) => x)
  return timeParts.join(', ')
}

function formatDays(days: number): string {
  if (days === 1) return `1 dag`
  if (days > 1) return `${days} dagar`
  return ''
}

function formatHours(hours: number): string {
  if (hours === 1) return `1 timme`
  if (hours > 1) return `${hours} timmar`
  return ''
}

function formatMinutes(minutes: number): string {
  if (minutes === 1) return `1 minut`
  if (minutes > 1) return `${minutes} minuter`
  return ''
}
