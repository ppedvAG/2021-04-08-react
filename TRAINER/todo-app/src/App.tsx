import './App.css';
import TodosTable from './m003/todosTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO APP</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Homepage
        </a>
      </header>
      <TodosTable />
    </div>
  );
}

export default App;
