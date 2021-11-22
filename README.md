# Reproduce Next.js Middleware Bug with ApolloLink

`next build`
```
$ next build
(node:28555) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
(Use `node --trace-warnings ...` to show where the warning was created)
info  - Checking validity of types  
warn  - using beta Middleware (not covered by semver) - https://nextjs.org/docs/messages/beta-middleware
info  - Creating an optimized production build  
Failed to compile.

./node_modules/ts-invariant/lib/invariant.esm.js
Dynamic Code Evaluation (e. g. 'eval', 'new Function') not allowed in Middleware pages/_middleware

Import trace for requested module:
./node_modules/apollo-boost/lib/bundle.esm.js
./pages/_middleware.js


> Build failed because of webpack errors
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```