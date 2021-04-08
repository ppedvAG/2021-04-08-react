import React from 'react';
import './App.css';
import ElementChildren, { ComponentChildren, ReactChildren } from './m004/Children';
import ClassComponent, { ClassComponentWithProps } from './m006/ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Demo App mit TypeScript</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Homepage
        </a>
        <h2>props.children</h2>
        <pre>Children von einem JSX-Element / React-Element</pre>
        <ElementChildren />
        <pre>Children von einer React-Komponente</pre>
        <ComponentChildren>
          <p>text für return der Komponente selbst</p>
        </ComponentChildren>
        <pre>Einsetzen von React.Children</pre>
        <ReactChildren>
          <p>p1</p>
          <p>p2</p>
          <p>p3</p>
        </ReactChildren>
        <h2>Komponenten als Klassen</h2>
        <ClassComponent/>
        <ClassComponentWithProps inhalt="Inhalt für Props">
          <p>child</p>
        </ClassComponentWithProps>
      </header>
    </div>
  );
}

export default App;