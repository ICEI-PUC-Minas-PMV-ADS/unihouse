# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foram consolidados com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/unihouse/assets/85804740/649cd6de-a805-4123-aac9-87583c91709d) <br> <br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/unihouse/assets/85804740/869985a2-bcbd-4463-a326-e3d201ca9603) <br> <br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/unihouse/assets/85804740/89f28d21-bb01-4b52-bde1-42195f4a094e) <br> <br>


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Ryan Silva  | Encontrar uma república perto da universidade que vou estudar. | Passei no vestibular de uma cidade distante e preciso encontrar um lugar para morar. |
|Maria Peixoto       | Conseguir morar em um alojamento estudantil. | Economizar dinheiro, e ter uma nova experiência de vida, morando com pessoas diferentes. |
|Evelyn Juliana       | Encontrar pessoas com perfil desejado, para alugar quartos disponíveis na casa onde moro. | Fazer uma renda extra, alugando quartos disponíveis onde moro. |
|Pedro Santos       | Encontrar uma república de pessoas com gostos parecidos ao meu. | Fazer amigos e trocar network enquanto estou na universidade. |
|Alana Lúcia      | Encontrar uma casa ou apartamento para alugar perto da universidade que estudo. | Quero morar sozinha perto da universidade e ter mais privacidade. |
|João Carlos       | Encontrar 1 pessoa semelhante a mim para dividir o aluguel de um apartamento. | Morar com mais uma pessoa, gastando menos e mantendo um bom nível de privacidade. |
|Cristina Lima      | Descobrir mulheres do mesmo curso que também estejam em busca de pessoas para alugar uma casa, durante a graduação. | Morar somente com mulheres, que também estão fazendo faculdade. |
|Nathan Elias       | Descobrir o preço médio de aluguel perto da universidade. | Encontrar o melhor aluguel custo benefício. |

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

