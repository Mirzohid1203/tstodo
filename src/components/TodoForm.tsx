import { useState } from 'react';
import { useTodos } from '@/context/TodoContext';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const TodoForm = () => {
    const [text, setText] = useState('');
    const { addTodo } = useTodos();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Vazifa kiriting..."
                className="flex-1"
            />
            <Button type="submit" size="icon">
                <Plus className="w-5 h-5" />
            </Button>
        </form>
    );
};