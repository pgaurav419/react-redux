import './App.css';
import AddTodo from './components/addTodo';
import Todo from './components/Todos';

function App() {
  const user = {
    fName: "Gaurav",
    lName: "Pandey",
    printFullName: function () {
      console.log(this)
    }
  }

  user.printFullName()
  return (
    <>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
