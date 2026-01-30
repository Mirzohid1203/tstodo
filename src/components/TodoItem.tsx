import { useTodos, Todo } from '@/context/TodoContext';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const TodoItem = ({ todo }: { todo: Todo }) => {
    const { deleteTodo, toggleTodo } = useTodos();

    return (
        <div className="flex items-center justify-between p-3 border rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3">
                <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(todo.id)}
                />
                <span className={cn(
                    "text-sm font-medium transition-all",
                    todo.completed && "line-through text-slate-400"
                )}>
                    {todo.text}
                </span>
            </div>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
            >
                <Trash2 className="w-4 h-4" />
            </Button>
        </div>
    );
};