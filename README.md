# projeto-node
 
### Iniciar um projeto no GitHub
Criar um repositório (private ou public)
Escolher a tecnologia (.gitignore), caso disponível
Escolher a opção README.md

### Token
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
 
### Clonar o projeto para o computador local
Escolher a pasta correspondente aos seus projetos
Escolher um editor eficiente (VsCode, Atom, SublimeText, NetBeans, WebStorm...) tendo acesso ao prompt de comando
 
-> git clone "endereço do projeto no github"
 
### Iniciar o arquivo de configuração package.json
-> npm init -y
 
## Configuração do NPM para instalação de pacotes (ESCOLA)
npm set strict-ssl false
npm config set registry https://registry.npmjs.org/
 
## Configuração do Git/GitHub (ESCOLA)
git config --global http.sslVerify false
 
### Instalação de dependências
npm install "nome da tecnologia"
Exemplo: 
-> npm install express
 
Sempre pesquisar a tecnologia no site que contém a documentação oficial 
Exemplo: NPM, YARN
 
### Desinstalando uma dependência
NÃO excluir qualquer pasta dentro do node_modules
-> npm uninstall express
 
### Executando o servidor
node "nome do arquivo"
Exemplo:
-> node app 