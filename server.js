const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');
server.use(cors());
server.use(middlewares);
server.use(router);

const port = 4003;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
