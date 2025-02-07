import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

export default function App() {
  return (
    <div>
      <h1 className="text-red-500">Gerenciador de Tarefas</h1>
      <AddTasks />
      <Tasks />
    </div>
  );
}
