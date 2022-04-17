<h1 align="center">
  MoniPaEp
</h1>

<h2 align="center">
    Implementação do aplicativo mobile MoniPaEp.
</h2>

<h4 align="center">Aplicação mobile desenvolvida para ajudar o Sistema de Vigilância em Saúde (SVS) no combate a epidemias</h4>

<p align="center">
  <a href="#como-executar">Como executar</a> •
  <a href="#funcionalidades até o momento">Funcionalidades até o momento</a> •
  <a href="#funcionalidades futuras">Funcionalidades Futuras</a> •
</p>

![](https://github.com/vinicius-claus/IC-MoniPaEp-Mobile/blob/main/figma.png)


## 🚀 Como executar
<ul>
  <li>Fazer um clone do projeto para o seu computador </li>
  <li>Instale o sistema de empacotamento de software Yarn: https://classic.yarnpkg.com/en/</li>
  <li>Instalar o expo na sua máquina e no seu celular</li>
  <li>Rodar yarn install no diretório raiz</li>
  <li>Instale e rode o banco de dados disponível em https://github.com/vinicius-claus/IC-MoniPaEp-Backend</li>
  <li>Mude o endereço de ip escrito na variável "base URL" no documento "api.tsx" que está diretório "services" para: "seu endereço de ip:3333"</li>
  <li>No diretório raiz, executar **expo start** para iniciar a aplicação </li>
  <li>Uma aba de navegação que representa a aplicação irá abrir no seu navegador padrão</li>
  <li>Utilize o aplicativo expo no seu celular para scanear o QR-Code</li>
  <li> ou **yarn android | ios** para rodar a aplicação usando emulador </li>
  <li>versão acessivel está atualmente na branch Acessibility</li>
</ul>

## 💬 Funcionalidades até o momento
<ul>
  <li>Login com CPF e Senha</li>
  <li>Cadastro de paciente</li>
  <li>Tela de Perfil do paciente que exibe seu status atual e há quantos dias não atualiza os sintomas</li>
</ul>


## 💬 Funcionalidades Futuras
<ul>
  <li>Inclusão de sintomas</li>
  <li>Inclusão de Histórico de Doenças</li>
  <li>Listagem de Histórico de Sintomas</li>
  <li>Perguntas Frequentes</li>
  <li>Inforações da Conta no APP</li>
  <li>Agenda para lembrete de consultas</li>
</ul>
