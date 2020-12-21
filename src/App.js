import "./App.css";

import Paper from "./components/Paper";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import Todo from "./components/Todo";

function App() {
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos>
        <Todo/>
      </Todos>
    </Paper>
  );
}

export default App;
