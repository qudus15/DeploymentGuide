import { Eraser } from "lucide-react";
import { Todo } from "../types/todo"

interface TodoSummaryProps{
    todos: Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSummary({
    todos,
    deleteAllCompleted,
}: TodoSummaryProps){

    const completedTodos = todos.filter((todo) => todo.completed)

    return(
        <div className="flex justify-between p-4 py-4 max-w-screen-lg mx-auto rounded-md bg-white dark:bg-gray-950 transition-colors duration-1000">
            <p className="text-sm font-medium dark:text-gray-300 transition-colors duration-1000">
            {completedTodos.length} of {todos.length} tasks completed
            </p>

            {completedTodos.length > 0 && (
            <button
            onClick={deleteAllCompleted}
            className="text-red-500 hover:text-red-700 flex text-sm font-medium max-w-17"
            >
                <Eraser size={20} className="pe-1"/>Clear completed
            </button>
        )}
        </div>
    )
}