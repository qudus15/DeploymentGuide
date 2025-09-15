import { useEffect, useState } from "react";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import TodoSummary from "../components/TodoSummary";
import useTodos from "../hooks/useTodos";
import { Moon, SunMoon } from "lucide-react";

// type SetupItemProps = {
//     dummy: string;
//     title: string;
//     head: string;
// };

export default function NewSetup( { dummy, title } ){

      const {
        todos,
        addTodo,
        setTodoCompleted,
        deleteTodo,
        deleteAllCompletedTodos
      } = useTodos(dummy);
    
      const [isDarkMode, setIsDarkMode] = useState(false);
    
      useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [isDarkMode]);
      
    return(
        <>

            <header className="max-w-screen-lg mx-auto">
            <div className="flex items-center justify-between pb-1">
            <p className="text-lg text-center flex dark:text-gray-300 transition-colors duration-1000">{title}</p>
            <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className=" text-white ml-auto"
                >
                {isDarkMode ? (<SunMoon size={25} className="transition-colors duration-1000"/>) : (<Moon size={25} className="transition-colors duration-1000 text-gray-800"/>)}
                </button>
                </div>
            </header>

            <AddTodoForm onSubmit={addTodo}/>

            <div className="max-w-screen-lg mx-auto rounded-md bg-white dark:bg-gray-950 transition-colors duration-1000 border shadow-sm">
                <TodoList 
                todos={todos} 
                onCompletedChange={setTodoCompleted}
                onDelete={deleteTodo}/>
            
                <TodoSummary 
                todos={todos}
                deleteAllCompleted={deleteAllCompletedTodos}
                />
            </div>

        </>
    )
}