# CHANGEME

## Setup

### Node

1.  Install `nvm` ([Node Version Manager])
2.  `cd` to the project directory and execute the following:
    ```
    nvm install
    nvm use
    npm install
    ```

### IDE Setup

This project uses [EditorConfig] for IDE configuration.

See `.editorconfig` for settings.

Many popular IDEs and editors support this out of the box or with a plugin.

### GraphQL Server

This project assumes that there is a separate GraphQL server running for the backend.

The server configuration assumes that the GraphQL server is running on [http://localhost:3000/graphql].

The GraphQL server port can be changed by setting the environment variable `GRAPHQL_PORT` to an open port.

The GraphQL server URL can be wholly changed by setting the environment variable `GRAPHQL_URL` to a valid URL.

In addition, the `fetch-schema` command will use these environment variables if set

## Development

### Updating `schema.graphql`

```
npm run fetch-schema
```

### Compiling Relay

One time:

```
npm run relay
```

Watch files and continually compile changes:

```
npm run relay:watch
```

### Running the Local Server

```
npm run server:development
```

The server runs at [http://localhost:5000/].

The port can be changed by setting the environment variable `WEBPACK_SERVER_PORT` to an open port.

### Prettier

This project uses [Prettier], so please run it before checking in:

```
npm run pretty
```

See `.prettierrc` for settings.

Some IDEs and editors have plugins for running Prettier.

### Linting

This project uses [TSLint]. Check linting before checking in:

```
npm run lint
```

See `tslint.json` for settings.

Many IDEs and editors support TSLint.

## Testing

This project uses [Jasmine] for testing. Run tests before checking in.

### Unit Tests

```
npm test
```

### Integration Tests

```
npm run test:integration
```

## Building

### Development

```
npm run build:development
```

### Production

```
npm run build
```

[http://localhost:3000/graphql]: http://localhost:3000/graphql
[http://localhost:5000/]: http://localhost:5000/
[editorconfig]: https://editorconfig.org/
[jasmine]: https://jasmine.github.io/
[node version manager]: https://github.com/creationix/nvm
[prettier]: https://prettier.io/
[tslint]: https://palantir.github.io/tslint/
