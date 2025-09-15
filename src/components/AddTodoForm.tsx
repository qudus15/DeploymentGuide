import { CirclePlus } from "lucide-react";
import React, { useState } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}

export default function AddTodoForm({onSubmit }: AddTodoFormProps){

    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        if (!input.trim()) return;

        onSubmit(input);
        setInput("");
    }

    function clearField(){
        setInput("")
    }
    
    return(
        <>
        <form className="flex rounded-md border shadow-sm max-w-screen-lg mx-auto" onSubmit={handleSubmit}>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add task"
            className="grow rounded-s-md bg-white p-3 focus:outline-none dark:bg-gray-950 dark:text-gray-300 transition-colors duration-1000"
            />

            <button 
            type="submit"
            title="Add item"
            className="text-gray-500 hover:text-gray-800 text-center p-2 pe-3 bg-white rounded-e-md dark:bg-gray-950 dark:text-gray-300 transition-colors duration-1000"
            >
                <CirclePlus size={25}/>
            </button>

        </form>

        <div className="text-end max-w-screen-lg mx-auto">
            {input.length > 0 && (
                <button onClick={clearField}
                title="Clear field"
                className="text-blue-500 hover:text-blue-600 text-sm font-medium text-left"
                >
                Clear field
                </button>
            )}
        </div>
        </>
    )
}