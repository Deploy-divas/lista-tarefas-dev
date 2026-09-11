
const Filtro = ({ selecionarStatus }) => {
  const opcoes = [
    { valor: "todas", texto: "Todas", cor: "bg-azul-claro" },
    { valor: "pendentes", texto: "Pendentes", cor: "bg-laranja" },
    { valor: "concluidas", texto: "Concluídas", cor: "bg-turquesa" },
  ];

  return (
    <aside className="flex justify-between bg-fundo-cards my-10 mx-40 border-2 border-roxo-claro rounded-xl px-10 py-4 font-padrao font-semibold shadow-2xl">
      <h4 className="py-2 text-white font-corpo text-3xl">Filtros</h4>
      <div className="flex gap-5">
        {opcoes.map((opcao) => (
          <button key={opcao.valor} onClick={() => selecionarStatus(opcao.valor)} className={`px-5 py-2 ${opcao.cor} text-white text-2xl text-shadow-lg/20 rounded-xl font-corpo shadow-2xl hover:bg-roxo-claro active:bg-fundo transition duration-200`}>
            {opcao.texto}
          </button>
        ))}
      </div>
    </aside>
  )
}

export default Filtro
