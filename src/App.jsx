import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
function App() {
  
  // useState mantém o array de tarefas cadastradas.
  const [tarefas, setTarefas] = useState([]);

  // Callback responsável por receber uma nova tarefa enviada pelo TaskForm
  const adicionarTarefa = (novaTarefa) => {

    setTarefas((tarefasAnteriores) => [
      ...tarefasAnteriores,
      novaTarefa
    ]);

  };

  return (
    <main>

      <h1>Lista de Tarefas do Programador</h1>

      <TaskForm adicionarTarefa={adicionarTarefa} />

      <TaskList tarefas={tarefas} />

    </main>
  );
}

export default App;