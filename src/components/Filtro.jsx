
const Filtro = ({ selecionarStatus }) => {
  const opcoes = [
    { valor: "todas", texto: "Todas" },
    { valor: "pendentes", texto: "Pendentes" },
    { valor: "concluidas", texto: "Concluídas" },
  ];

  return (
    <aside className="flex justify-between bg-fundo-cards m-10 border-2 border-roxo-claro rounded-xl px-10 py-4 font-padrao font-semibold shadow-2xl">
      <h4 className="py-2 text-white font-corpo text-2xl">Filtros</h4>
      <div className="flex gap-5">
        {opcoes.map((opcao) => (
          <button key={opcao.valor} onClick={() => selecionarStatus(opcao.valor)} className="px-5 py-2 bg-azul-escuro text-white rounded-xl font-corpo shadow-2xl hover:bg-azul active:bg-azul-claro active:text-azul-escuro transition duration-200">
            {opcao.texto}
          </button>
        ))}
      </div>
    </aside>
  )
}

export default Filtro
