import TodoName from "./components/todoname";
import TodoList from "./components/todolist";
import TodoItem1 from "./components/todoitem1";
import TodoItem2 from "./components/todoitem2";

function app(){
  return(
    <>
   <center class='todo-title'>
   <TodoName />
   <TodoList />
   <TodoItem1 />
   <TodoItem2 />
    </center>
</>

  )

}
export default app;