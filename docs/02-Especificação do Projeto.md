# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foram consolidados com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

|ID     | Descrição do Requisito  | Prioridade |
|-------|-----------------------------------------|----|
|RF-01 | Na tela principal deverá apresentar os Estados que possuem as universidades com maior pontuação no MEC | Media | 
|RF-02 | Na tela principal deverá conter uma barra de pesquisa de localização das universidades   | Alta |
|RF-03 | Na tela principal deverá conter um acesso para a tela de login   | Baixa |
|RF-04 | Na tela principal deverá conter informações sobre a empresa e por quê escolhê-la.   | Baixa |
|RF-05 | Na tela de login deverá conter dois campos de usuários senha para o acesso ao site   | Alta |
|RF-06 | O sistema deverá verificar se existe usuário   | Alta |
|RF-07 | Na tela de login deverá conter o “esqueci minha senha” no qual redirecionará para uma nova página   | Media |
|RF-08 | A tela de “recuperar senha” deverá conter dois campos de usuário e e-mail   | Media |
|RF-09 | O sistema deverá enviar uma mensagem de recuperação de senha para o e-mail cadastrado na conta   | Baixa |
|RF-10 | Na tela de login deverá conter acesso para a tela de cadastro caso usuário não possua conta   | Alta |
|RF-11 | Na tela de cadastro deverá ter um formulário contendo os campos de e-mail, usuário, senha e confirmar sua senha   | Alta |
|RF-12 | Na tela de cadastro deverá ter uma mensagem informando ao usuário que ao se cadastrar estará concordando com os termos de uso   | Baixa |
|RF-13 | Aplicação deve conter capacidade de navegar entre as páginas   | Alta |
|RF-14 | O site deve permitir informar preço e informações sobre acomodação   | Media |
|RF-15 | Na tela de cadastro do alojamento deverá conter diversos campos contendo informações específicas do usuário e do alojamento | Alta |
|RF-16 | O site deve apresentar, para cada alojamento, uma imagem correspondente ao quarto disponível, sala de estar, cozinha e banheiro (thumbnail)   | Baixa |
|RF-17 | O site oferece fotos de acomodação das hospedagens   | Baixa |
|RF-18 | A tela de cadastro deverá mostrar uma mensagem ao realizar o cadastro informando que não será possível realizar o cadastro caso não tenha preenchido os campos corretamente.   | Alta |
|RF-19 | A tela de cadastro deverá mostrar uma mensagem informando que a senha é fraca caso tenha menos de 6 dígitos.   | Alta |
|RF-20 | O usuário deverá informar um email válido para recuperar a senha.   | Alta |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Sistema capaz de lidar com inúmeros usuários sem qualquer degradação no desempenho.  | ALTA | 
|RNF-002| Sistema possui toda segurança, impossibilitando acessos restritos de hackers. |  MEDIA | 
|RNF-003| Sistema com toda escalabilidade sendo capaz de aumentar ou diminuir conforme o necessário. |  ALTA | 
|RNF-004| Sistema contém modificações das informações diariamente. |  ALTA | 
|RNF-005| Sistema possui disponibilidade 24 horas. |  ALTA | 
|RNF-006| Sistema cumprindo todas as leis e regulamentos aplicáveis. |  BAIXA | 
|RNF-007| Sistema com usabilidade, tendo uma grande facilidade pro usuário. |  ALTA | 
|RNF-008| Sistema que permite cadastro/login e senha. |  BAIXA | 
|RNF-009| Sistema compatível com os principais navegadores do mercado (Google Chrome, Microsoft Edge, Firefox, Safari). |  ALTA | 
|RNF-010| Sistema com toda confiabilidade, atendendo todos os requisitos do usuário. |  ALTA | 
|RNF-011| Sistema que possui telas responsivas, dando possibilidade de acesso por todo e qualquer dispositivos.|  MEDIA | 


## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A aplicação tem como prazo para a finalização do desenvolvimento até 25/06/2023. |
|02| O projeto deve se restringir as tecnologias básicas de web front-end.        |
|03| A equipe não poderá subcontratar o desenvolvimento do projeto.        |
|04| Para realização do projeto a equipe deve definir e seguir em conjunto padrões de projeto.       |

