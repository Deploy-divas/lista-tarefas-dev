function TaskList({ tarefas, removerTarefa, concluirTarefa }) {

  if (tarefas.length === 0) {
    return <p>Nenhuma tarefa cadastrada.</p>;
  }

  return (
    <section>
      <h2>Minhas tarefas</h2>
      {/* map percorre o array de tarefas e cria
          um elemento para cada tarefa. */}
      {tarefas.map((tarefa) => (
        <article key={tarefa.id}>
          <h3>{tarefa.nome}</h3>
          <p>{tarefa.descricao}</p>
          <p>Data: {new Date(tarefa.data + "T00:00:00").toLocaleDateString("pt-BR")}</p>
          <p>Prioridade: {tarefa.prioridade}</p>

          <button onClick={() => removerTarefa(tarefa.id)}>Apagar</button>
          <button onClick={() => concluirTarefa(tarefa.id)}>{tarefa.concluida ? "Desfazer" : "Completar"}</button>
        </article>
      ))}
    </section>
  );
}

export default TaskList;