# Bella Nails

## Integrantes da dupla

- Rafael Ferreira Souza
- Vinícius Pereira de Albuquerque

## Descrição do caso escolhido

Isabela Santos é manicure autônoma com 12 anos de experiência, atendendo em studio próprio no
Manhattan Shopping (Águas Claras). Ela atua com manicure, pedicure, esmaltação em gel, fibra de vidro e
nail art personalizada, mas não possuía nenhuma presença digital organizada — dependia apenas
de indicações boca a boca e de um perfil informal no Instagram.

## Necessidade identificada

A ausência de um site tornava difícil para novos clientes encontrarem informações sobre serviços,
valores, localização e formas de agendamento. A comunicação estava dispersa e dependia
inteiramente de mensagens diretas no Instagram.

## Público-alvo

Mulheres entre 20 e 50 anos, moradoras ou trabalhadoras próximas à Águas Claras, que buscam
um serviço de manicure de confiança, com bom atendimento, higiene e acabamento diferenciado.
Esse público acessa o site principalmente pelo celular e precisa encontrar rapidamente: serviços
oferecidos, preços aproximados, localização e uma forma fácil de entrar em contato.

## Objetivo do site

A principal ação esperada do visitante é solicitar um agendamento — seja via formulário de
contato ou via WhatsApp. O site serve também como portfólio visual dos trabalhos realizados e
como canal de apresentação profissional da manicure.

## Processo de desenvolvimento

1. Diagnóstico da necessidade real e definição do público-alvo
2. Planejamento do conteúdo e hierarquia das seções
3. Definição da paleta de cores e tipografia coerente com o contexto
4. Estruturação do HTML semântico 
5. Inserção das imagens reais do portfólio e da seção Sobre
6. Estilização com CSS externo, variáveis CSS e responsividade via media queries
7. Implementação do JavaScript somente na seção de Dúvidas Comuns (acordeão do FAQ)
8. Inclusão do Bootstrap 5 para grid, navbar responsiva e cards de serviços
9. Testes de responsividade, acessibilidade, imagens e funcionamento do script
10. Publicação via GitHub Pages

## Principais decisões do projeto

**Separação dos arquivos:** o projeto foi dividido em três arquivos separados — HTML, CSS e JS —
deixando o código mais organizado e fácil de manter, já que cada arquivo cuida de uma
responsabilidade diferente.

**HTML sem div:** nenhuma tag `<div>` foi utilizada no projeto. No lugar dela, foram usados
elementos semânticos como `<section>`, `<article>`, `<figure>`, `<nav>` e `<address>`, tornando
o código mais legível e acessível.

**Imagens reais:** as imagens do portfólio e da seção Sobre foram inseridas com a tag `<img>`,
cada uma com um atributo `alt` descritivo. Todas estão organizadas dentro da pasta `img/`.

**JavaScript somente no FAQ:** decidimos usar JavaScript apenas na seção de Dúvidas Comuns,
para o efeito de acordeão. O restante do site funciona sem nenhum script, deixando o código
mais simples e direto.

**Paleta e tipografia:** as cores — rosa pó, creme e vinho — foram escolhidas para combinar com
o universo da beleza e o perfil do público-alvo. A tipografia usa Georgia nos títulos e fonte do
sistema no corpo do texto.

**Responsividade:** o layout foi construído para funcionar bem tanto no celular quanto no
computador, reorganizando-se automaticamente conforme o tamanho da tela.

**Bootstrap 5:** utilizado para o sistema de grid e a navbar responsiva. Onde o estilo padrão
não combinava com o visual do site, o CSS próprio foi aplicado por cima.

**Publicação via GitHub Pages:** escolhido por ser gratuito, integrado ao repositório e
suficiente para hospedar um site estático.

## Funcionalidade em JavaScript

A única funcionalidade implementada em JavaScript é o **acordeão da seção de Dúvidas Comuns**.

Quando a página carrega, todas as respostas ficam escondidas e o visitante vê apenas as
perguntas. Ao clicar em uma delas, a resposta aparece logo abaixo. Se clicar em outra pergunta,
a anterior fecha automaticamente e a nova abre — apenas uma resposta fica visível por vez.

Tecnicamente, o JavaScript adiciona um "ouvinte de clique" em cada botão. Quando acionado,
ele usa o atributo `hidden` no HTML para mostrar ou esconder a resposta, e atualiza o atributo
`aria-expanded` para garantir que a funcionalidade também seja acessível para quem usa leitor
de tela.

## Uso de Bootstrap

- `navbar` com `navbar-expand-lg` para menu hambúrguer automático em mobile
- `container` para limitar a largura do conteúdo
- `row` + `col-*` para o grid de serviços e a seção de contato
- `card` + `h-100` para os cards de serviços com altura uniforme
- `g-4`, `g-5` para espaçamento consistente entre colunas
- Classes utilitárias: `text-center`, `mb-4`, `mb-5`, `ms-auto`, `align-items-center`

## Testes realizados

**Responsividade:** o site foi testado em diferentes tamanhos de tela usando o DevTools do
navegador, simulando celular, tablet e desktop. Em todos os casos o layout se reorganizou
corretamente.

**Links:** todos os links da navegação foram clicados para verificar se levavam para a seção
correta. Os links de WhatsApp e Instagram também foram testados.

**Imagens:** as imagens do portfólio e da seção Sobre foram conferidas uma a uma para garantir
que estavam aparecendo e enquadradas corretamente. Também foi verificado se cada imagem
possuía um atributo `alt` descritivo.

**Navegação por teclado:** a página foi navegada usando apenas a tecla Tab, confirmando que
era possível acessar todos os links, botões e campos sem o mouse. O acordeão do FAQ também
foi testado pelo teclado.

**Publicação no GitHub Pages:** após subir os arquivos e ativar o GitHub Pages, o link gerado
foi aberto em outro dispositivo para confirmar que o CSS, o JavaScript e as imagens estavam
carregando corretamente fora do ambiente local.

## Links

- Link do repositório: _a preencher_
- Link do site publicado: _a preencher_

## Contribuição dos integrantes

- **Rafael Ferreira de Souza:** Ajudou na construção do site e na parte de testes, também contribuiu na pesquisa e definição do objetivo do projeto.
- **Vinícius Pereira de Albuquerque:** Ajudou na construção dos entregáveis, definição de público alvo e construção do rascunho do site.
