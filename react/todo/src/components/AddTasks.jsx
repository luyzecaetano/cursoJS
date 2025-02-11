import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-zinc-500 rounded-xl flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-zinc-600  px-4 py-2 outline-zinc-200 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-zinc-600 outline-zinc-200 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-zinc-700 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa.");
          }
          () => onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}>
        Adicionar
      </button>
    </div>
  );
}
export default AddTasks;
