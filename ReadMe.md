# yarn-pnp-bug-eslint-plugin

- I've configured ESLint to use the "no-autofix" and "@typescript-eslint" plugins.
- I'm using using Yarn 3.x.
- When I set `nodeLinker: node-modules`, things work.
- When I set `nodeLinker: pnp`, ESLint is unable to load the "no-autofix" plugin:

```
$ yarn install
...
$ yarn eslint .

Oops! Something went wrong! :(

ESLint: 8.35.0

Error: Failed to load plugin 'no-autofix' declared in '.eslintrc.js': ENOENT: no such file or directory, scandir '/Users/kannan/Develop/eslint-plugin-pnp-bug/node_modules/'
    at Object.readdirSync (node:fs:1451:3)
    at NodeFS.readdirSync (/Users/kannan/Develop/eslint-plugin-pnp-bug/.pnp.cjs:2898:26)
    at makeCallSync.subPath.subPath (/Users/kannan/Develop/eslint-plugin-pnp-bug/.pnp.cjs:5176:26)
    at ZipOpenFS.makeCallSync (/Users/kannan/Develop/eslint-plugin-pnp-bug/.pnp.cjs:5279:14)
    at ZipOpenFS.readdirSync (/Users/kannan/Develop/eslint-plugin-pnp-bug/.pnp.cjs:5175:17)
    at VirtualFS.readdirSync (/Users/kannan/Develop/eslint-plugin-pnp-bug/.pnp.cjs:4423:24)
    at PosixFS.readdirSync (/Users/kannan/Develop/eslint-plugin-pnp-bug/.pnp.cjs:4423:24)
    at NodePathFS.readdirSync (/Users/kannan/Develop/eslint-plugin-pnp-bug/.pnp.cjs:4423:24)
    at Object.<anonymous> (/Users/kannan/Develop/eslint-plugin-pnp-bug/.yarn/__virtual__/eslint-plugin-no-autofix-virtual-9be9fc9475/0/cache/eslint-plugin-no-autofix-npm-1.2.3-caad08b9e4-2c5ec4d708.zip/node_modules/eslint-plugin-no-autofix/lib/rules.js:60:23)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
```
