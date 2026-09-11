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
    <div className="flex flex-col items-center justify-center">

      <h2 className="text-3xl font-titulo font-bold text-roxo-vibrante text-shadow-sm">+ Criar nova tarefa</h2>
      <form onSubmit={cadastrarTarefa} className="flex justify-between items-center text-white bg-fundo-cards my-10 mx-40 border-2 border-roxo-claro rounded-xl px-10 py-4 font-padrao font-semibold shadow-2xl ">

        <div className="flex flex-col px-10 py-4 gap-3">
          <label className="text-2xl font-corpo px-1">Nome da tarefa</label>
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Nome da tarefa"
            className="py-3 px-5 rounded-lg text-white font-corpo text-xl border-2 border-roxo-vibrante focus:outline-none focus:bg-fundo transition duration-200"
          />
        </div>

        <div className="flex flex-col px-10 py-4 gap-3">
          <label className="text-2xl font-corpo px-1">Data</label>
          <input
            type="date"
            value={data}
            onChange={(event) => setData(event.target.value)}
            className="py-3 px-5 rounded-lg text-white font-corpo text-xl border-2 border-roxo-vibrante focus:outline-none focus:bg-fundo transition duration-200"
          />
        </div>

        <div className="flex flex-col px-10 py-4 gap-3">
          <label className="text-2xl font-corpo px-1">Descrição</label>
          <textarea
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
            placeholder="Descrição da tarefa"
            className="py-3 px-5 min-h-15 h-15 rounded-lg text-white font-corpo text-xl border-2 border-roxo-vibrante focus:outline-none focus:bg-fundo transition duration-200"
          />
        </div>

        <div className="flex flex-col px-10 py-4 gap-3">
          <label className="text-2xl font-corpo px-1">Prioridade</label>
          <select
            value={prioridade}
            onChange={(event) => setPrioridade(event.target.value)}
            className="py-3 px-5 min rounded-lg text-white font-corpo text-xl border-2 border-roxo-vibrante focus:outline-none focus:bg-fundo transition duration-200"

          >
            <option value="">Selecione</option>
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>
        </div>

        <button type="submit" className={`px-5 py-2 bg-roxo-vibrante text-white text-2xl text-shadow-lg/20 rounded-xl font-corpo shadow-2xl hover:bg-roxo-claro active:bg-fundo transition duration-200`}>
          Adicionar tarefa
        </button>
      </form>
      
    </div>
  );
}

export default TaskForm;