import Typography from 'typography';
// https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-alton/src/index.js
import altonTheme from 'typography-theme-alton';
const typography = new Typography(altonTheme);
export const { scale, rhythm, options } = typography;
export default typography;
