import Layout from "@/components/Layout"
import Tabela from "@/components/Tabela"
import Botao from "@/components/Botao"
import Formulario from "@/components/Formulario"
import useCliente from "@/hooks/useClientes"

export default function Home() {

  const { 
          cliente, 
          clientes, 
          clienteSelecionado, 
          excluirCliente, 
          novoCliente,
          salvarCliente,
          tabelaVisivel,
          exibirTabela 
        } = useCliente()


  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500 
    `}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao
                cor='green' className="mb-4"
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela cliente={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            cancelado={exibirTabela}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  )
}
