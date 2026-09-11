import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filtro from "./components/Filtro"

function App() {
  
  // useState mantém o array de tarefas cadastradas.
  const [tarefas, setTarefas] = useState(() => {
        const salvarTarefas = localStorage.getItem("item-tarefa");
        return salvarTarefas ? JSON.parse(salvarTarefas) : [];
    });
  //mantém o o status que o usuário escolheu, por padrão começa com todas as tarefas
  const [statusSelecionado, setStatusSelecionado] = useState("todas");

  //filtra entre tarefas concluídas e pendentes
  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (statusSelecionado === "pendentes") {
      return !tarefa.concluida;
    }

    if (statusSelecionado === "concluidas") {
      return tarefa.concluida;
    }

    return true;
  });

   //carregar automaticamente as tarefas cadastradas.
  useEffect(() => {
    localStorage.setItem("item-tarefa", JSON.stringify(tarefas));
  }, [tarefas]);

  // Callback responsável por receber uma nova tarefa enviada pelo TaskForm
  const adicionarTarefa = (novaTarefa) => {
    setTarefas((tarefasAtuais) => [...tarefasAtuais, novaTarefa]);
  };

    //lista todas as tarefas cadastradas menos a que teve o id selecionado, essa nova lista é salva na váriavel
  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  //lista todas as tarefas cadastradas e muda o status da que teve o id selecionado
  const concluirTarefa = (id) => {
    setTarefas((tarefasAtuais) =>  tarefasAtuais.map((tarefa) =>  tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa));
  };

  return (
    <main className="bg-fundo w-full min-h-screen">

      <h1 className="text-center text-5xl font-padrao font-bold text-roxo-vibrante p-15 pb-5 text-shadow-sm">Lista de Tarefas do Programador</h1>
      <Filtro selecionarStatus={setStatusSelecionado} />
      <TaskForm adicionarTarefa={adicionarTarefa} />

      <TaskList tarefas={tarefasFiltradas} removerTarefa={removerTarefa} concluirTarefa={concluirTarefa} />

    </main>
  );
}

export default App;