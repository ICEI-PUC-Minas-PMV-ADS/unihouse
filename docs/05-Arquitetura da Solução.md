# Arquitetura da Solução

---

A arquitetura da solução é composta pelos seguintes componentes: banco de dados, servidor de aplicação, interface do usuário e serviços de integração. O ambiente de hospedagem da aplicação ocorre pelo Heroku, a escolha do Heroku como ambiente de hospedagem da aplicação foi feita devido à sua facilidade de uso e escalabilidade. Além disso, ele oferece suporte para diversas linguagens de programação e integrações com ferramentas de terceiros que podem ser úteis para a solução.

## **Diagrama de componentes**

---

![Diagrama de componentes](https://user-images.githubusercontent.com/54692628/233869481-fb4cbbfb-824f-4adc-af2e-22d7ff3bf189.png)

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

A solução implementada conta com os seguintes módulos:

- **Navegador -** Interface básica do sistema
    - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
- **Banco de Dados -** responsável pelo armazenamento e gerenciamento dos dados utilizados pela aplicação.
- **Hospedagem -** local na Internet onde as páginas são mantidas e acessadas pelo navegador.
- 
![userFlow](https://user-images.githubusercontent.com/85804740/233804329-f295a4c0-1126-426c-834a-f1af4258c5ab.png)

## Tecnologias Utilizadas

---

A solução será desenvolvida utilizando as seguintes tecnologias:

- **HTML** - Linguagem de marcação utilizada para estruturar e exibir conteúdo na web.
- **CSS** - Linguagem de folha de estilo utilizada para definir a aparência e o layout do conteúdo na web.
- **JavaScript** - Linguagem de programação utilizada para fornecer interatividade e dinamismo ao conteúdo na web.
- **MySQL** - Sistema de gerenciamento de banco de dados relacional utilizado para armazenar e gerenciar os dados da aplicação.
- **jQuery** - Biblioteca de JavaScript utilizada para simplificar a manipulação de eventos e elementos na web.

## Hospedagem

---

O ambiente de hospedagem da aplicação é gerenciado pelo serviço de nuvem Heroku, que oferece alta disponibilidade, escalabilidade e suporta diferentes linguagens de programação. Além disso, o Heroku oferece integrações com ferramentas de terceiros que podem ser úteis para a solução, como bancos de dados externos e serviços de cache.
