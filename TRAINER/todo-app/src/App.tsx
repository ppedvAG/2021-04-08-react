import './App.css';
import TodosTable from './m003/todosTable';
import InputField from './m007/InputField';
import TodosM008 from './m008/Todos';

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
      <InputField />
      <TodosM008/>
    </div>
  );
}

export default App;
