// Development environment. Automatically used by `ng serve` (see angular.json fileReplacements).
export const environment = {
  production: false,
  // Use the HTTP endpoint in development: the Node.js SSR process (ng serve) does not
  // trust the .NET self-signed HTTPS dev certificate, so plain HTTP avoids TLS errors.
  apiUrl: 'http://localhost:5000/api'
};
