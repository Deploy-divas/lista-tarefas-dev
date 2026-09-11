function TaskList({ tarefas, removerTarefa, concluirTarefa }) {

  if (tarefas.length === 0) {
    return <p className="text-white text-center font-corpo text-3xl">Nenhuma tarefa cadastrada.</p>;
  }

  return (
    <section className="flex flex-col items-center w-full px-6">
      <h2 className="text-3xl font-titulo font-bold text-roxo-vibrante text-shadow-sm mb-6">Minhas tarefas</h2>
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-20">
        {/* map percorre o array de tarefas e cria
            um elemento para cada tarefa. */}
        {[...tarefas].reverse().map((tarefa) => (
          <article key={tarefa.id}  className="flex flex-col gap-3 text-white bg-fundo-cards border-2 border-roxo-claro rounded-xl p-6 font-corpo font-semibold shadow-2xl text-xl">
            <h3 className="text-azul-claro font-extrabold">{tarefa.nome}</h3>
            <p>{tarefa.descricao}</p>
            <p>Data: {new Date(tarefa.data + "T00:00:00").toLocaleDateString("pt-BR")}</p>
            <p>Prioridade: {tarefa.prioridade}</p>

            <button onClick={() => removerTarefa(tarefa.id)} className={`px-5 py-2 bg-roxo-vibrante text-white text-2xl text-shadow-lg/20 rounded-xl font-corpo shadow-2xl hover:bg-roxo-claro active:bg-fundo transition duration-200`}>Apagar</button>
            <button onClick={() => concluirTarefa(tarefa.id)} className={`px-5 py-2 text-white text-2xl text-shadow-lg/20 rounded-xl font-corpo shadow-2xl hover:bg-fundo active:bg-fundo transition duration-200 ${tarefa.concluida ? "bg-turquesa" : "bg-laranja"}`}>{tarefa.concluida ? "Desfazer" : "Completar"}</button>
          </article>
        ))}
      </div>

    </section>
  );
}

export default TaskList;