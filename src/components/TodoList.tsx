import { useTodos } from '@/context/TodoContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const { todos } = useTodos();

    if (todos.length === 0) {
        return (
            <div className="text-center py-10 text-slate-500 italic">
                Hozircha vazifalar yo'q...
            </div>
        );
    }

    return (
        <div className="space-y-3 mt-6">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};