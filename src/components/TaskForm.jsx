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
    <form onSubmit={cadastrarTarefa} className="bg-amber-400 m-10">
      <h2>Nova tarefa</h2>
      <label>Nome da tarefa</label>
      <input
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        placeholder="Nome da tarefa"
      />
      <label>Data</label>
      <input
        type="date"
        value={data}
        onChange={(event) => setData(event.target.value)}
      />
      <label>Descrição</label>
      <textarea
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
        placeholder="Descrição da tarefa"
      />
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
      <button type="submit">
        Adicionar tarefa
      </button>
    </form>
  );
}

export default TaskForm;