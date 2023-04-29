import ColecaoCliente from "@/backend/db/ColecaoCliente";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { useEffect, useState } from "react";
import useTabelaouForm from "./useTabelaouForm";

export default function useCliente() {
  const repo: ClienteRepositorio = new ColecaoCliente();

    const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario } = useTabelaouForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(obterTodos, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela()
    });
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario
  }
  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    exibirFormulario
  }

  return {
      cliente,
      clientes,
      novoCliente,
      salvarCliente,
      excluirCliente,
      clienteSelecionado,
      obterTodos,
      tabelaVisivel,
      exibirTabela
  };
}
