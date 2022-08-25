import React from 'react';
import './App.css';

function App() {
  return (
    <div className="">
      <nav className="uk-navbar-container" uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active"><a href="">Test</a></li>
            <li className="uk-parent"><a href="">Test 2</a></li>
            <li><a href="">Test 3</a></li>
          </ul>
        </div>
      </nav>

      <div className="uk-overflow-auto uk-height-medium">
        <div className="uk-inline">
          <button className="uk-button uk-button-default" type="button">Hover</button>
          <div className="uk-dropbar uk-dropbar-top" uk-drop="stretch: x">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
      </div>

      <div className="uk-child-width-1-2@s uk-text-center" uk-grid>
        <div>
          <div className="uk-background-default uk-padding uk-panel">
            <p className="uk-h4">Default</p>
          </div>
        </div>
        <div>
          <div className="uk-background-muted uk-padding uk-panel">
            <p className="uk-h4">Muted</p>
          </div>
        </div>
        <div>
          <div className="uk-background-primary uk-light uk-padding uk-panel">
            <p className="uk-h4">Primary</p>
          </div>
        </div>
        <div>
          <div className="uk-background-secondary uk-light uk-padding uk-panel">
            <p className="uk-h4">Secondary</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
