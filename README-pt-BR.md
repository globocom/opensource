# Globo Open Source

Globo open source website [https://opensource.globo.com](http://opensource.globo.com).

Feito com ❤️ para a comunidade de código aberto.

## Desenvolvimento

Você precisa ter `nodejs` e `yarn` instalados. Verifique o `package.json` `engines` para o intervalos de versões propostas.

Use os seguintes comandos para configurar e executar o aplicativo:

```bash
make setup
make start
```

## Deploy

```bash
make deploy
```

> Este website é hospedado por [Tsuru](https://tsuru.io/).

## Setup

A aplicação usa o [Github GraphQL API v4](https://developer.github.com/v4/) acessar dados de organizações e repositórios da Globo. Para se comunicar com o servidor GraphQL, você precisará de um [OAuth token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) com os seguintes escopos:

```txt
user
read:org
```

Com seu token em mãos, você precisará definir o token para a variável de ambiente `GATSBY_GITHUB_TOKEN`.

```bash
export GATSBY_GITHUB_TOKEN=<your_token_here>
```

ou criar um arquivo `.env.development` com seu env vars:

```ini
// .env.development
GATSBY_GITHUB_TOKEN=<your_token_here>
```

## Licença

Este projeto está licenciado sob a Licença MIT - leia o arquivo [LICENSE.md](LICENSE) para detalhes.

*Este artigo foi traduzido do [Inglês](README.md) para o [Português (Brasil)](README-pt-BR.md).*
