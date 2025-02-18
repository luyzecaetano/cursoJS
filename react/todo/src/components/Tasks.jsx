import { ChevronRightIcon, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <div>
      <ul className="space-y-4 p-2 flex flex-col">
        {tasks.map((task) => (
          <li key={task.id} className="flex">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`w-full p-2 rounded-l-lg text-left font-semibold bg-zinc-800 text-white ${
                task.isCompleted && "line-through"
              }`}>
              {task.title}
            </button>
            <button
              onClick={() => onDetailsClick(task)}
              className="bg-zinc-800 p-2 text-white border-x border-x-zinc-900 border-opacity-25">
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-zinc-800 text-white p-2 rounded-r-lg">
              <X />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
