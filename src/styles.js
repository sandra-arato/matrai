import { createGlobalStyle } from 'styled-components'
import { lighten } from 'polished'

export const colors = {
  primary: `#fff`,
  secondary: `#171717`,
  text: `#171717`,
  bgLight: `#fff`,
  bgDark: `#ededed`,
  bgGrey: `#f8f8f8`,
}

const globalCSS = `
  /* Fonts */
  @font-face {
    font-family: Doulus;
    src: url("/fonts/DoulosSILR.ttf") format("ttf");
  }

  /* Start Clear */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    color: ${colors.text};
    font-family: Montserrat, sans-serif;
  }

  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* End Clear */

  /* Start Base */

  input::placeholder {
    color: ${lighten(0.4, colors.text)};
    opacity: 1;
  }
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${lighten(0.4, colors.text)};
    opacity: 1;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    font-family: inherit;
    color: ${lighten(0.4, colors.text)};
    opacity: 1;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: ${lighten(0.4, colors.text)};
    opacity: 1;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: ${lighten(0.4, colors.text)};
    opacity: 1;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="search"] {
    -webkit-appearance: searchfield;
  }
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  :invalid { /* Firefox 18- */
    outline: none;
    box-shadow: none;
  }

  input:disabled {
    background: transparent;

    &::placeholder: {
      opacity: 0.5;
    }
  }

  html, #root {
    font-size: 16px;
    height: 100%;
  }

  body {
    font-family: Montserrat, sans-serif;
    cursor: default;
    min-height: 100%;
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: "liga" on;
  }

  body:after {
    content: "";
    display: table;
    clear: both;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
  }

  p {
    line-height: 1;
    font-weight: 400;
  }

  input,
  input[type='search'],
  textarea,
  select,
  button {
    -webkit-appearance: none;
  }

  button {
    border: none;
    border-radius: 0;
    background: none;
    padding: 0;
    outline: none;
    cursor: pointer;
  }

  svg {
    width: 100%;
    height: auto;
  }

  /* Media queries */

  html {
    font-size: 10px;
  }

  body {
    font-size: 1rem;
  }
`;
export const GlobalStyles = createGlobalStyle`${globalCSS}`;
