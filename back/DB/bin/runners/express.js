import { createServer } from 'node:http';
import expressApp from '../../servers/express.js';

const port = 4000;
const server = createServer(expressApp);

server.listen(port);
server.on('error', (err) => {
    console.log('ERR:', err);
});

server.on('listening', () => {
    console.log(`listen http server ${port}`);
})