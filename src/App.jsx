import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {

  return (
    <>

      <h1 className = "mx-10">
        React-Redux To-do application
      </h1>

      <AddTodo />
      <Todos />
      {/* <h1 className="text-4xl font-bold underline">
        Hello world!
      </h1> */}

    </>
  )
}

export default App
