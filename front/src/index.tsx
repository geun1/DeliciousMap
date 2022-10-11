import React from 'react';
import ReactDOM from 'react-dom/client';
import {createGlobalStyle} from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    min-width:40px;
    border: 0;
    outline: 0;
    background-color: transparent;
    font-size: 100%;
  }

  ul,
  li,
  ol{
    list-style: none;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyle/>
    <App />
  </>
);

