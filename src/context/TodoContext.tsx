import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodoContextType {
    todos: Todo[];
    addTodo: (text: string) => void;
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    // LocalStorage-dan o'qish
    const [todos, setTodos] = useState<Todo[]>(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        setTodos([...todos, { id: crypto.randomUUID(), text, completed: false }]);
    };

    const deleteTodo = (id: string) => setTodos(todos.filter(t => t.id !== id));

    const toggleTodo = (id: string) => {
        setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => {
    const context = useContext(TodoContext);
    if (!context) throw new Error("useTodos TodoProvider ichida bo'lishi kerak!");
    return context;
};