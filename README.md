# Reproduce Next.js Middleware Bug with @apollo/client

`next build`

```
➜  reproduce-apollo-middleware-build-failure git:(main) ✗ yarn build
yarn run v1.22.10
$ next build
(node:87846) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
(Use `node --trace-warnings ...` to show where the warning was created)
info  - Checking validity of types
warn  - using beta Middleware (not covered by semver) - https://nextjs.org/docs/messages/beta-middleware
info  - Creating an optimized production build
Failed to compile.

./node_modules/@apollo/client/utilities/globals/global.js
Dynamic Code Evaluation (e. g. 'eval', 'new Function') not allowed in Middleware pages/_middleware

Import trace for requested module:
./node_modules/@apollo/client/utilities/globals/index.js
./node_modules/@apollo/client/core/index.js
./node_modules/@apollo/client/index.js
./pages/_middleware.js


> Build failed because of webpack errors
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
