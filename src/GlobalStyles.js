import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}

/*
  2. Remove default margin
*/
* {
  margin: 0;
}

/*
  3. Allow percentage-based heights in the application
*/
html, body, #root {
  height: 100%;
}

/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
  6. Project settings, like font choice
  7. Small font inherits parent font
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: "Inter", sans-serif;
}

small {
  font: inherit;
}

/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}

/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

/*
  10. Remove list styles
*/
ul, ol {
  list-style: none;
  padding: 0;
}

/*
  11. Body display settings
*/
#root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body {
  background-color: #f1d4b3;
  overflow: hidden;
  color: #292218;
}

/*
  12. Remove default button styles
*/
button {
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
}
`;

export default GlobalStyles;
