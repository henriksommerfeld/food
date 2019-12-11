import { createGlobalStyle } from 'styled-components';
import { colors } from './constants';
import { tailwindColors } from './tailwind-colors';

export const GlobalStyles = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }


  body {
    margin: 0;
    overflow-x: hidden;
  }
  body:not(.keyboard-navigation) * {
    outline: none;
  }
  ::selection {
    background-color: ${colors.selectionBackground};
    color: ${colors.white};
  }
  img {
    pointer-events: none;
    margin-bottom: 0;
  }
  a {
    color: ${colors.link};
    transition: color, text-shadow, background 150ms ease-out, outline 60ms;
    background: linear-gradient(
    to right,
    ${tailwindColors.red700} 0%,
    ${tailwindColors.red400} 50%,
    ${tailwindColors.red700} 100%
    );
    background-position-x: left;
    background-position-y: 97%;
    background-repeat: repeat;
    background-size: auto;
    background-size: 0px 2px;
    background-repeat: no-repeat;
  }
  a:visited {
    color: ${colors.linkVisited};
  }
  a:focus, a:active, a:hover {
    color: ${colors.linkFocus};
    background-size: 100% 2px;

  }
  .screen-reader-text {
    display: none;
  }
  .gatsby-resp-image-background-image, .gatsby-resp-image-image, .featured-thumbnail {
    margin: 0;
    padding: 4px;
    box-shadow: rgba(34, 25, 25, 0.4) 0 1px 3px !important;
    background-color: #fff;
  }
`;
