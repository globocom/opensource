# Globo Open Source

Globo open source website [https://opensource.globo.com](http://opensource.globo.com).

Made with ❤️ to the open source community.

## Development

You need to have `nodejs` and `yarn` installed. Check the `package.json` `engines` prop for versions range.

Use the following commands to setup and run the application:

```bash
make setup
make start
```

## Deploy

```bash
make deploy
```

> This website is hosted by [Tsuru](https://tsuru.io/).

## Setup

The application uses the [Github GraphQL API v4](https://developer.github.com/v4/) to acess data from the Globo organizations and respositories. To communicate with the GraphQL server, you'll need an [OAuth token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) with the following scopes:

```txt
user
read:org
```

With your token in hands, you will need to set the token to the environment variable `GATSBY_GITHUB_TOKEN`.

```bash
export GATSBY_GITHUB_TOKEN=<your_token_here>
```

or by creating a `.env.development` file with your env vars:

```ini
// .env.development
GATSBY_GITHUB_TOKEN=<your_token_here>
GATSBY_API_URL=<api_url_here>
```

or you could just run `make setup-dev` and replace `.env.development` entries with your env vars values.

## License

This project is licensed under the MIT License - read [LICENSE.md](LICENSE) file for details.

*This article can also be read in [Brazilian Portuguese](README-pt-BR.md).*
