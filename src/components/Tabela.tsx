import Cliente from "@/core/Cliente"
import { IconeEdicao, IconeLixo } from "./icones"

interface TabelaProps {
    cliente: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="p-4 text-left">Código</th>
                <th className="p-4 text-left">Nome</th>
                <th className="p-4 text-left">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.cliente?.map((Cliente, i) => {
            return (
                <tr key={Cliente.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'} `}>
                    <td className="p-4 text-left">{Cliente.id}</td>
                    <td className="p-4 text-left">{Cliente.nome}</td>
                    <td className="p-4 text-left">{Cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(Cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.clienteExcluido ? (

                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                    flex justify-center items-center
                    text-red-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}