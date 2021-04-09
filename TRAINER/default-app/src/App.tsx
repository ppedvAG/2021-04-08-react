import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import ElementChildren, { ComponentChildren, ReactChildren } from './m004/Children';
import ClassComponent, { ClassComponentWithProps } from './m006/ClassComponent';
import { DateTime } from './m007/DateTime';
import Destructuring from './m008/Destructuring';
import UseState from './m008/UseState';
import Lifecycle from './m009/Lifecycle';
import UseEffect from './m010/UseEffect';
import Redux from './m012/Redux';

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
          React Homepage
        </a>
        <Link to="/props-children">
        <h2>props.children</h2>
        </Link>
        <Switch>
        <Route path="/rops-children" component={ElementChildren}></Route>
        </Switch>
  
       
        <pre>Children von einem JSX-Element / React-Element</pre>
        {/* <ElementChildren /> */}
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
        <h2>State</h2>
        <DateTime />
        <h2>m008 Destructuring & Hooks</h2>
        <Destructuring/>
        <pre>use state</pre>
        <UseState/>
        <h2>m009 Lebenszyklus</h2>
        {/* <Lifecycle propForProps="propValue"/> */}
        <h2>Use Effect</h2>
        <UseEffect />
        <h2>m012</h2>
        <Redux />
      </header>
    </div>
  );
}

export default App;