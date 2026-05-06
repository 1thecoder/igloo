import { createReadStream, existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { createServer } from 'node:http';

const port = process.env.PORT || 4173;
const root = process.cwd();
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const requestedPath = normalize(url.pathname === '/' ? '/index.html' : url.pathname);
  const filePath = join(root, requestedPath);
  const safePath = filePath.startsWith(root) && existsSync(filePath) ? filePath : join(root, 'index.html');
  response.writeHead(200, { 'Content-Type': types[extname(safePath)] || 'application/octet-stream' });
  createReadStream(safePath).pipe(response);
}).listen(port, () => {
  console.log(`Portfolio running at http://localhost:${port}`);
});
