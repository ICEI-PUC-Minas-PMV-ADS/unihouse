# Plano de Testes de Software

| **Caso de Teste** 	| **CT-01 – Login do usuário com sucesso** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF- 06  O sistema deverá verificar se existe usuário |
| Objetivo do Teste 	| Verificar se a partir do e-mail e senhas fornecidos, o login é realizado com sucesso. |
| Passos 	| 1) Abri o navegador  <br> 2) Acessar o link UniHouse <br> (https://icei-puc-minas-pmv-ads.github.io/unihouse/index.html) <br> 3) Clicar no ícone de login <br> 4) Preencher o campo de Login com o e-mail <br> 5) Preencher o campo da senha <br> 6) Clicar em Login |
|Critério de Êxito | O login foi realizado com sucesso |

<br>
<br>

| **Caso de Teste** 	| **CT-02 – Acesso para tela de Login**	|
|:---:	|:---:	|
|Requisito Associado | RF-03 Na tela principal deverá conter um acesso para a tela de login |
| Objetivo do Teste 	| Verificar se o ícone de login irá redirecionar para a tela de login. |
| Passos 	| 1) Abri o navegador <br> 2) Acessar o link (https://icei-puc-minas-pmv-ads.github.io/unihouse/index.html) <br> 3) Clicar no ícone de acesso para o Login <br> 4) Abrir tela de login |
|Critério de Êxito |  A tela de login foi aberta.|
<br>
<br>

| **Caso de Teste** 	| **CT-03 – Validação de formulário de cadastro- campos vazios**	|
|:---:	|:---:	|
|Requisito Associado | RF- 18 A tela de cadastro deverá mostrar uma mensagem <br> ao realizar o cadastro informando que não será possível realizar o cadastro caso <br> não tenha preenchido todos os campos, tipos de entrada ou caso não tenha <br> senhas iguais. |
| Objetivo do Teste 	| Verificar se é possível realizar o cadastro sem todos os campos estarem preenchidos |
| Passos 	| 1) Abri o navegador <br> 2) Acessar o link (https://icei-puc-minas-pmv-ads.github.io/unihouse/index.html) <br> 3) Clicar no link para fazer login <br> 4) Clicar em “Ainda não possui conta? Cadastre-se no site” <br> 5) Preencher os campos solicitados <br> 6) Clicar no botão “Cadastrar” |
|Critério de Êxito | O cadastro foi realizado com sucesso. |

<br>
<br>

| **Caso de Teste** 	| **CT-04 – Validação de formulário de cadastro- tipos de entrada**	|
|:---:	|:---:	|
|Requisito Associado | RF- 18 A tela de cadastro deverá mostrar uma mensagem ao realizar o cadastro informando que não será possível realizar o cadastro caso não tenha preenchido todos os campos, tipos de entrada ou caso não tenha senhas iguais. |
| Objetivo do Teste 	| Verificar se é possível realizar o cadastro comtodos os campos preenchidos |
| Passos 	| 1) Abri o navegador <br> 2) Acessar o link (https://icei-puc-minas-pmv-ads.github.io/unihouse/index.html) <br> 3) Clicar no link para fazer login <br> 4) Clicar em “Ainda não possui conta? Cadastre-se no site” <br> 5) Preencher os campos solicitados <br> 6) Fornecer e-mail em formato válido <br> 7) Clicar no botão “Cadastrar” |
|Critério de Êxito | O cadastro foi realizado com sucesso. |

<br>
<br>

| **Caso de Teste** 	| **CT-05 – Validação de formulário de cadastro- senhas iguais**	|
|:---:	|:---:	|
|Requisito Associado | RF- 18 A tela de cadastro deverá mostrar uma mensagem ao realizar o cadastro informando que não será possível realizar o cadastro caso não tenha preenchido todos os campos, tipos de entrada ou caso não tenha senhas iguais. |
| Objetivo do Teste 	| Verificar se é possível realizar o cadastro quando as senhas estiverem iguais |
| Passos 	| 1) Abri o navegador <br> 2) Acessar o link (https://icei-puc-minas-pmv-ads.github.io/unihouse/index.html) <br> 3) Clicar no link para fazer login <br> 4) Clicar em “Ainda não possui conta? Cadastre-se no site” <br> 5) Preencher os campos solicitados <br> 6) Verificar se as senhas são iguais. <br> 7) Clicar no botão “Cadastrar” |
|Critério de Êxito | O cadastro foi realizado com sucesso. |

<br>
<br>

| **Caso de Teste** 	| **CT-06 – Validação de formulário de cadastro- tamanho mínimo de senha **	|
|:---:	|:---:	|
|Requisito Associado | RF-19  A tela de cadastro deverá mostrar uma mensagem informando que a senha deve ter no mínimo 6 caracteres. |
| Objetivo do Teste 	| Verificar se é possível realizar cadastro caso a senha tenha no mínimo 6 caracteres. |
| Passos 	| 1) Abri o navegador <br> 2) Acessar o link (https://icei-puc-minas-pmv-ads.github.io/unihouse/index.html) <br> 3) Clicar no link para fazer login <br> 4) Clicar em “Ainda não possui conta? Cadastre-se no site” <br> 5) Preencher os campos solicitados <br> 6) Analisar a quantidade de caracteres que deverá constar no mínimo  <br> 7) Clicar no botão “Cadastrar” |
|Critério de Êxito | O cadastro foi realizado com sucesso. |

<br>
<br>

| **Caso de Teste** 	| **CT-07 – Função de esqueci a senha **	|
|:---:	|:---:	|
|Requisito Associado | RF- 06 O sistema deverá verificar se existe usuário <br> RF- 07 Na tela de login deverá conter o “esqueci minha senha” no qual redirecionará para uma nova página<br> RF- 08 A tela de “recuperar senha” deverá conter dois campos de usuário e e-mail |
| Objetivo do Teste 	| Verificar se a partir do e-mail fornecido válido, a recuperação de senha é realizada com sucesso. |
| Passos 	| 1) Abri o navegador <br> 2) Acessar o link (https://icei-puc-minas-pmv-ads.github.io/unihouse/index.html) <br> 3) Clicar no link para fazer login <br> 4) Clicar em “Esqueci minha senha” <br> 5) Digitar e-mail e login válido para recuperação de senha <br> 7)Clicar no botão “Recuperar”|
|Critério de Êxito | Recuperar senha com sucesso.|

<br>
<br>

| **Caso de Teste** 	| **CT-08 – Redirecionamento entre as páginas **	|
|:---:	|:---:	|
|Requisito Associado | RF-13  Aplicação deve conter capacidade de navegar entre as páginas |
| Objetivo do Teste 	| Verificar se o redirecionamento das páginas está correto e funcional. |
| Passos 	| 1) Abri o navegador <br> 2) Acessar o link (https://icei-puc-minas-pmv-ads.github.io/unihouse/index.html) <br> 3) Clicar nos ícones e botões de acesso que redirecionam para outras páginas. <br> 4)Entrar na página conforme o objetivo.|
|Critério de Êxito | Acessar a página relacionada ao ícone/ botão.|

<br>
<br>

| **Caso de Teste** 	| **CT-09 – Tela principal **	|
|:---:	|:---:	|
|Requisito Associado | RF- 01 Na tela principal deverá apresentar os Estados que possuem as universidades com maior pontuação no MEC na qual possibilite pesquisar alojamentos através do Estado. |
| Objetivo do Teste 	| Verificar se há a existência dos Estados na tela inicial. |
| Passos 	| 1) Abri o navegador <br> 2) Acessar o link (https://icei-puc-minas-pmv-ads.github.io/unihouse/index.html) <br> 3) Verificar se há Estados listados na tela principal.|
|Critério de Êxito | Existem alguns Estados listados na tela principal.|

<br>
<br>

| **Caso de Teste** 	| **CT-10 – Fotos da acomodação **	|
|:---:	|:---:	|
|Requisito Associado | RF- 17 O site oferece fotos de acomodação das hospedagens |
| Objetivo do Teste 	| Verificar se ao pesquisar alojamentos, irá aparecer fotos dos locais divulgados.  |
| Passos 	| 1) Abri o navegador <br> 2) Acessar o link (https://icei-puc-minas-pmv-ads.github.io/unihouse/index.html) <br> 3) Digitar o local na barra de pesquisa <br> 4) Clicar em pesquisar <br> 5) Verificar se há imagens das acomodações.|
|Critério de Êxito | Todas os locais apresentados na pesquisa possuem imagem da acomodação visível. |

<br>
<br>
