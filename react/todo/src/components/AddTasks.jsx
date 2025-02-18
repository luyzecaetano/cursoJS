import { useState } from "react";
import Input from "./Input";
import { Plus } from "lucide-react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex">
      <div className="w-11/12 space-y-4 p-2 flex flex-col">
        <Input
          type="text"
          placeholder="task title..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          type="text"
          placeholder="task description..."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div className="p-2">
        <button
          onClick={() => {
            if (!title.trim() || !description.trim()) {
              return alert("Preencha o título e a descrição da tarefa.");
            }
            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
          }}
          className="bg-zinc-800 text-white px-4 py-2 rounded-lg font-medium">
          <Plus />
        </button>
      </div>
    </div>
  );
}
export default AddTasks;
