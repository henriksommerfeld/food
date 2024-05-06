export function transparentizeHex(hex: string, opacity: number): string {
  const noHashHex = hex.replace('#', '')
  const r = parseInt(noHashHex.substring(0, 2), 16)
  const g = parseInt(noHashHex.substring(2, 4), 16)
  const b = parseInt(noHashHex.substring(4, 6), 16)

  const result = `rgba(${r}, ${g}, ${b}, ${opacity})`
  return result
}

export function lighten(color: string, amount: number) {
  color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color
  amount = parseInt(((255 * amount) / 100).toString())
  return (color = `#${addLight(color.substring(0, 2), amount)}${addLight(
    color.substring(2, 4),
    amount
  )}${addLight(color.substring(4, 6), amount)}`)
}

export function darken(color: string, amount: number) {
  color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color
  amount = parseInt(((255 * amount) / 100).toString())
  return (color = `#${subtractLight(color.substring(0, 2), amount)}${subtractLight(
    color.substring(2, 4),
    amount
  )}${subtractLight(color.substring(4, 6), amount)}`)
}

function addLight(color: string, amount: number) {
  const cc = parseInt(color, 16) + amount
  const c = cc > 255 ? 255 : cc
  return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`
}

const subtractLight = function (color: string, amount: number) {
  const cc = parseInt(color, 16) - amount
  const c = cc < 0 ? 0 : cc
  return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`
}
