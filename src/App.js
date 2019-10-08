import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './App.module.scss';
import Logo from '@app/components/Logo'

function App() {
  return (
    <div styleName="container">
      <Logo></Logo>
      <header styleName="header">
        <img src={logo} styleName="logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          styleName="link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
