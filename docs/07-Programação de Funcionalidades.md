# Programação de Funcionalidades

Esta parte esta reservada para apresentarmos desenvolvidas para cada uma das funcionalidades do sistema. O respectivo endereço e outras orientações de acesso são apresentadas na sequência.

## Cadastrar casa
A tela de cadastrar casa, é feita especificamente para locadores que desejam anunciar sua casa para as pessoas que vão para a faculdade e desejam morar perto da universidade. Ele vai preencher os dados de acordo com sua casa e clicar em cadastrar, fazendo assim um anúncio na plataforma.
 
![telacadastrarcasa](https://github.com/ICEI-PUC-Minas-PMV-ADS/unihouse/assets/85804740/331942f3-6a66-4387-bc42-db9dbc0f6a9c)

> Artefatos da funcionalidades
> * RegisterAccommodation.html
> * script.js
> * RegisterAccommodation_script.js
> * RegisterAccommodation_style.css
> * reset.css
> * style.css

> Requisitos atingidos
> * RF-14
> * RF-15 
> * RF-16
> * RF-17

> Instruções de acesso 
> 1. Abra um navegador de Internet e informe a seguinte URL: https://localhost:3000
> 2. Você estará na tela homepage, e então clicará no seu perfil, que no momento não estará logado, e então você chegará na página
> 3. Preencha os dados corretamente
> 4. Clique no botão "LOGIN"
> 5. Clique novamente no seu perfil
> 6. Clique em adicionar casa
> 7. Preencha todos os dados corretamente

## Recuperar senha 
A tela de recuperar senha irá ser utilizada somente se você tiver esquecido a sua senha. A funcionalidade em si, ela irá pedir Seu usuário e seu e-mail, assim ele irá te enviar um e-mail com sua senha antiga.
 
![telarecuperarsenha](https://github.com/ICEI-PUC-Minas-PMV-ADS/unihouse/assets/85804740/3cf49aba-e90d-4943-97ea-781cf0c5294e)

> Artefatos da funcionalidades
> * forgetPassword.html
> * script.js
> * forgetPassword_script.js
> * forgetPassword_style.css
> * reset.css
> * style.css

> Requisitos atingidos
> * RF-08
> * RF-09

> Instruções de acesso 
> 1. Abra um navegador de Internet e informe a seguinte URL: https://localhost:3000
> 2. Você estará na tela homepage, e então clicará no seu perfil, que no momento não estará logado, e então você chegará na página
> 3. Clique no botão "esqueci minha senha"
> 4. E preencha os dados desejados na tela de esqueci minha senha

## Login
A tela de login ela consiste em dois campos simples, usuario e senha. Caso você tenha esquecido a sua senha, nós disponibilizamos a oportunidade de você clicar no botão e ir para a página de recuperar senha, e a outra possibilidade é você não estar cadastrado no nosso site, e você clicando em Cadastrar-se, você é redirecionado para a tela de cadastro, logo abaixo do botão de login. Voltando a funcionalidade "Login", você preenche os dados e caso ambos estajam válidos a sua conta, você é direcionado para a nossa homepage. Caso você erre algum dado, você não vai conseguir se logar no nosso sistema.
 
![telaslogin](https://github.com/ICEI-PUC-Minas-PMV-ADS/unihouse/assets/85804740/71923d51-6c8a-4ad6-b6c6-9150c227a95f)

> Artefatos da funcionalidades
> * login.html
> * script.js
> * login_script.js
> * login_style.css
> * reset.css
> * style.css

> Requisitos atingidos
> * RF-05
> * RF-06
> * RF-07
> * RF-10

> Instruções de acesso 
> 1. Abra um navegador de Internet e informe a seguinte URL: https://localhost:3000
> 2. Você estará na tela homepage, e então clicará no seu perfil, que no momento não estará logado, e então você chegará na página
> 3. Preencha os dados corretamente
> 4. Clique no botão "LOGIN"

## Cadastro na plataforma
A tela de cadastro consiste em usuário, e-mail, senha e confirmar senha, em que a senha e o confirmar senha, tem que ser obrigatóriamente iguais. O cadastro tem que receber todas as informações válidas para assim, o cliente se cadastrar no sistema.
 
![telascadastro](https://github.com/ICEI-PUC-Minas-PMV-ADS/unihouse/assets/85804740/2f5e0d22-06ba-4975-ac4e-7a1707df6e94)

> Artefatos da funcionalidades
> * register.html
> * script.js
> * register_script.js
> * register_style.css
> * reset.css
> * style.css

> Requisitos atingidos
> * RF-11
> * RF-12

> Instruções de acesso 
> 1. Abra um navegador de Internet e informe a seguinte URL: https://localhost:3000
> 2. Você estará na tela homepage, e então clicará no seu perfil, que no momento não estará logado, e então você chegará na página
> 3. Assim, você clica em cadastr-se, em baixo do botão "login"
> 4. Preencha os dados corretamentes e clique em cadastrar


## Navegação entre telas
Consiste na navegação entre todas as telas presentes nesse arquivo, onde em apenas um clique, você consegue navegar entre as telas do sistema, abaixo está as telas restantes do sistema que não possuem uma funcionalidade própria. 
 
![sobrenos](https://github.com/ICEI-PUC-Minas-PMV-ADS/unihouse/assets/85804740/484094fa-5e76-4bcb-b441-b2abe1d6c2f6)
 
![porquenosescolher](https://github.com/ICEI-PUC-Minas-PMV-ADS/unihouse/assets/85804740/424ff5cc-b2cf-4d02-85b8-dd46427502df)

> Artefatos da funcionalidades
> * index.html
> * login.html
> * forgetPassword.html
> * registerAccommodation.html
> * register.html
> * script.js
> * register_script.js
> * registerAccommodation_script.js
> * forgetPassword_script.js
> * login_script.js
> * index_style.css
> * login_style.css
> * forgetPassword_style.css
> * registerAccommodation_style.css
> * register_style.css
> * reset.css
> * style.css

> Requisitos atingidos
> * RF-13

> Instruções de acesso 
> 1. Abra um navegador de Internet e informe a seguinte URL: https://localhost:3000
> 2. Você estará no sistema e conseguirá navegar pelo nosso sistema

## Buscar alojamento
Para buscar um alojamento você terá que estar na homepage do nosso sitema. Você pode pesquisar por cidade, estado ou uma casa especifica na barra de pesquisa localizada no meio da tela
 
![homepage](https://github.com/ICEI-PUC-Minas-PMV-ADS/unihouse/assets/85804740/ab602ae9-33c7-451d-87c5-e206e8d61f59)

> Artefatos da funcionalidades
> * index.html
> * script.js
> * index_script.js
> * index_style.css
> * reset.css
> * style.css

> Requisitos atingidos
> * RF-01
> * RF-02

> Instruções de acesso 
> 1. Abra um navegador de Internet e informe a seguinte URL: https://localhost:3000
> 2. Você estará na homepage 
> 3. Digite o que você deseja na barra de busca e clique "ENTER" ou clique no botão de lupa ao lado da barra
