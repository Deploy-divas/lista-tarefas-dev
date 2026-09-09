
const Filtro = ({ selecionarStatus }) => {
  const opcoes = [
    { valor: "todas", texto: "Todas" },
    { valor: "pendentes", texto: "Pendentes" },
    { valor: "concluidas", texto: "Concluídas" },
  ];

  return (
    <aside>
      <h4>Filtro</h4>
      {opcoes.map((opcao) => (
        <button key={opcao.valor} onClick={() => selecionarStatus(opcao.valor)}>
          {opcao.texto}
        </button>
      ))}
    </aside>
  )
}

export default Filtro
