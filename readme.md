# SerView
Projeto rede social, realizado em trio, na Laboratoria.

## Índice

* [Como utilizar](#como-utilizar)
* [Organização/Planejamento](#organização/planejamento)
* [Definição do produto](#definição-do-produto)
* [Personas](#personas)
* [Histórias de usuário](#Histórias-de-usuário)
  * [Definição de pronto](#Definição-de-pronto)
* [Protótipo](#protótipo)
* [Pesquisa com usuários](#Pesquisa-com-usuários)
  * [Testes de usabilidade](#testes-de-usabilidade)

[Link da aplicação](https://timecast-1557870834786.firebaseapp.com/)

## Como Utilizar
![Login Exemplo](./public/src/img/examples/login-redesocial-example.png)
![Feed Exemplo](./public/src/img/examples/feed.png)

## Organização/Planejamento

A organização do Projeto foi feito pelo [Trello](https://trello.com/b/qOxnn2Hn/rede-social). Sendo assim, conseguimos desde o primeiro contato com as especificações e objetivos pedidos para a conclusão do projeto uma organização baseada em divisões de tarefas por participante do grupo e melhor visualização e aprendizado durante o processo. Diante disso, conseguimos concluir cada sprint de maneira satisfatória com o proposto em cada estapa de planejamento.


## Definição do produto
A SerView é uma rede social para avaliar e consultar outras avaliações sobre serviços e estabelecimentos.

Os usuários podem interagir curtindo as publicações e assim estimular a credibilidade das avaliações e melhoria dos serviços prestados pelas empresas.


## Personas

**Elis**
![Persona 1](public/src/img/persona-elis.jpeg)

**Flora**
![Persona 2](/public/src/img/persona-flora.jpeg)

**Mateus**
![Persona 3](public/src/img/persona-mateus.jpeg)

## Histórias de usuário

1. Eu como usuário gostaria de ter opções de validações diversas ao fazer login.

2. Eu como usuária gostaria de saber quando esqueci de preencher campos de login.
3. Eu como usuária gostaria de fazer o meu cadastro em uma nova rede social de forma rápida, simples e fácil.
4. Eu como usuário gostaria de postar um texto sem limites de caracteres.
5. Eu como usuário quero que meus posts possam ser públicos ou privados.
6. Eu como usuária gostaria de visualizar as avaliações em um feed.
7. Eu como usuária gostaria de visualizar quantas pessoas concordam com determinada avaliação (além de gostei, curtir, ter a opção "concordo" com essa avaliação, para forma de dar credibilidade para aquela avaliação também).
8. Eu como usuária gostaria de avaliar de forma rápida, simples e fácil (por exemplo por estrelas,mas também com opção de relato textual da experiência).
9. Eu como usuária gostaria de poder editar, eliminar minhas publicações.

-- **Hacker Edition** -- 

10. Eu como usuária gostaria de sugestão do que postar na rede social.

11. Eu como usuária gostaria de ter acesso, no primeiro momento, somente das avaliações que mais têm "concordo".

12. Eu como usuária, gostaria de seguir alguns usuários e visualizar suas publicações (amigos), vice versa.


### Definição de pronto

* A aplicação atende a todos os requisitos para que o usuário complete a operação desejada.
* O código segue o guia de estilos estipulado.
* Usuários testaram a aplicação desde sua prototipagem até a conclusão.
* Melhorias identificadas nos testes foram implementadas.
* A aplicação passou nos testes.
* O código está sincronizado com as atualizações finais no repositório remoto.


## Protótipo

O protótipo da Serview, pode ser visualizado no link abaixo:

[Protótipo da aplicação](https://marvelapp.com/4h44fca)

## Pesquisa com usuários
  A pesquisa foi feita com 24 usuários e os dados foram coletados através de [Formulário de pesquisa](https://docs.google.com/forms/d/e/1FAIpQLSfDOZbfNN8p-GSgj2NvS4w2G5F3ycRkkmwtvty7NMaTUAe5vQ/viewform).
  
  Os resultados da pesquisa podem ser conferidos neste [link](https://docs.google.com/forms/d/1tN4QN1y_VHFamTrZgpaZWNbbaCZYYywVSCooYPodrAQ/edit).

  Com base nas respostas obtidas, pudemos constatar que:
  * 37,5% dos usuários têm o costume de avaliar os serviços que utiliza, e 8,3% avalia algumas vezes;
  * 89,5% dos usuários que não tem o costume de avaliar serviços, passaria a avaliar os serviços caso recebesse algum tipo de cashback;
  * 83,3% gostaria de saber mais sobre os serviços através da opinião de outros usuários;
  * 70,8% utilizaria um aplicativo/rede social de avaliações de serviços diversos.
  
### Testes de usabilidade
  Durante os testes com protótipo foi constatada a necessidade de mudar o local da navbar-menu para o topo da aplicação, pois seria de melhor visualização do usuário.
  De acordo com essa sugestão, mudamos a navbar-menu para o topo, abaixo do logo da aplicação.
  Nosso protótipo foi de alta fidelidade em mobile-first.

### Principais tecnologias Utilizadas
* JavaScript
* JQuery
* Firebase
* Bootstrap

A implementação do projeto foi feita de maneira dinâmica entre as tecnologias usadas, de acordo com os requisitos pedidos, seguindo da tela inicial de login, criação de usuário, Boas vindas, home/feed, cashback, pesquisar, amigos e configurações/logout, sendo a tela home/feed com os pontos principais da aplicação funcional: publicação de postagem, edição e exclusão, com escolha de postagem pública e privada; possibilidade de curtidas e filtragens das postagens por públicas e privadas. As outras telas representam a ideia geral da aplicação e funcionalidades para serem implementadas futuramente.
