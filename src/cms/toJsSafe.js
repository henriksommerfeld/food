export function toJsSafe(rawData) {
  return (rawData && rawData.toJS()) || {};
}
