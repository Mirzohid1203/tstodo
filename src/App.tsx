import { TodoProvider } from '@/context/TodoContext';
import { TodoForm } from '@/components/TodoForm';
import { TodoList } from '@/components/TodoList';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl border-none">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center text-slate-800">
              Mening Vazifalarim
            </CardTitle>
            <p className="text-center text-sm text-slate-500">
              Bugun nima qilamiz?
            </p>
          </CardHeader>
          <CardContent>
            <TodoForm />
            <TodoList />
          </CardContent>
        </Card>
      </div>
    </TodoProvider>
  );
}

export default App;