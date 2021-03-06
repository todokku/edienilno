const i_utils = require('./utils');
const i_worker = require('./worker');
const i_ws = require('./websocket');
const i_api = require('./api');

const server = i_utils.WebServer.create({ api: i_api });

i_worker.cronCleanAuthToken();
i_ws.init(server, '/ws');
i_ws.init_plugins();

const server_port = parseInt(process.env.EDIENILNO_PORT || 20202);
const server_host = process.env.EDIENILNO_HOST || '127.0.0.1';

const instance = server.listen(server_port, server_host, () => {
   console.log(`Edienilno is listening at ${server_host}:${server_port}`);
})
