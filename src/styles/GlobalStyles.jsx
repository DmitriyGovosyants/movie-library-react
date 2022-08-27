import { css } from '@emotion/react';

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    min-height: 100vh;
    margin: 0;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.03em;

    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(180, 140, 180, 1) 60%,
      rgba(255, 255, 255, 1) 100%
    );

    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;

    @media screen and (min-width: 1024px) {
      cursor: pointer;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .userBar-enter {
    transform: translateX(120%);
  }
  .userBar-enter-active {
    transform: translateX(0);
    transition: transform 350ms ease;
  }
  .userBar-exit {
    transform: translateX(0);
  }
  .userBar-exit-active {
    transform: translateX(120%);
    transition: transform 350ms ease;
  }
  .userBar-exit-done {
    transform: translateX(120%);
  }
`;
