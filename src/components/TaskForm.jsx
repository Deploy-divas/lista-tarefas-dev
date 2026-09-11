import { useState } from "react";
function TaskForm({ adicionarTarefa }) {
    
// useState armazena e atualiza o nome digitado pelo usuário.
  const [nome, setNome] = useState("");
// useState armazena e atualiza a data da tarefa.
  const [data, setData] = useState("");
// useState armazena e atualiza a descrição da tarefa.
  const [descricao, setDescricao] = useState("");
// useState armazena e atualiza a prioridade selecionada.
  const [prioridade, setPrioridade] = useState("");

  const cadastrarTarefa = (event) => {
    event.preventDefault();

    if (!nome || !data || !descricao || !prioridade) {
      alert("Preencha todos os campos.");
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      nome: nome,
      data: data,
      descricao: descricao,
      prioridade: prioridade,
      concluida: false
    };

    adicionarTarefa(novaTarefa);
    setNome("");
    setData("");
    setDescricao("");
    setPrioridade("");
  };

  return (
    <form onSubmit={cadastrarTarefa} className="flex justify-between items-center text-white bg-fundo-cards m-10 border-2 border-roxo-claro rounded-xl px-10 py-4 font-padrao font-semibold shadow-2xl ">
      <h2>Nova tarefa</h2>

      <div className="flex flex-col px-10 py-4 gap-3">
        <label>Nome da tarefa</label>
        <input
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder="Nome da tarefa"
        />
      </div>

      <div className="flex flex-col px-10 py-4 gap-3">
        <label>Data</label>
        <input
          type="date"
          value={data}
          onChange={(event) => setData(event.target.value)}
        />
      </div>

      <div className="flex flex-col px-10 py-4 gap-3">
        <label>Descrição</label>
        <textarea
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
          placeholder="Descrição da tarefa"
        />
      </div>

      <div className="flex flex-col px-10 py-4 gap-3">
        <label>Prioridade</label>
        <select
          value={prioridade}
          onChange={(event) => setPrioridade(event.target.value)}
        >
          <option value="">Selecione</option>
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>
      </div>

      <button type="submit">
        Adicionar tarefa
      </button>
    </form>
  );
}

export default TaskForm;