# sanitize-global-styles

This package provides a single function, that
returns a js object containing css styles from
[sanitize.css](https://github.com/csstools/sanitize.css).

## install

```npm i sanitize-global-styles```

## Usage

```javascript
import { createGlobalStyle } from 'styled-components';
import sanitizeGlobalStyles from 'sanitize-global-styles';

const GlobalStyle = createGlobalStyle`
  ${sanitizeGlobalStyles()} // that's all!
  
  // ...
`;

// later in your app

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```