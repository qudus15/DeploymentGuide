import { X } from "lucide-react";
import { Todo } from "../types/todo"

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}
export default function TodoItem({todo, onCompletedChange, onDelete}: TodoItemProps){
    return(
        <>
        <div className="flex items-center gap-1 p-2 ps-3 pe-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-1000">
            <label className="flex items-center gap-2  grow">
                <input type="checkbox"
                checked={todo.completed}
                onChange={(e) => onCompletedChange(todo.id, e.target.checked )}
                className="focus:outline-none accent-gray-600 w-4 h-4 rounded-md hover:text-gray-800 dark:accent-gray-600 transition-colors duration-1000"/>
                <span className={todo.completed ? "line-through text-gray-600 dark:text-gray-500 transition-colors duration-1000" : "text-gray-700 dark:text-gray-300 transition-colors duration-1000"}>
                    {todo.title}
                </span>
            </label>
            <button onClick={() => onDelete(todo.id)} title="Delete item">
                <X size={25} className="text-gray-500 hover:text-gray-800 dark:text-gray-200 transition-colors duration-1000"/>
            </button>
        </div>
        <div className="border-t border-gray-400 w-full"></div>
        </>
    )
}