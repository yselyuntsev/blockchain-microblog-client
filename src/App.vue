<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import "~material-design-icons/iconfont/material-icons.css";

:root {
  --c-blue: #679bff;
  --c-black: #1a202c;
  --c-gray: #a0aec0;
  --c-light: #edf2f7;
  --c-white: #ffffff;
  --c-green: #46dc79;
  --c-yellow: #f2da00;
  --c-orange: #f29100;
  --c-red: #f33c3c;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

html {
  font-size: 16px;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: #ffffff;
}

input,
button {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h2 {
  font-size: 24px;
  font-weight: 500;
  color: var(--c-black);
}
</style>
