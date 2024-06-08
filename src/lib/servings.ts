export function servingsUnitFormatted(servings: number, servingsUnit: string): string {
  if (servings === 1 && servingsUnit === 'portioner') return 'portion'
  return servingsUnit
}
