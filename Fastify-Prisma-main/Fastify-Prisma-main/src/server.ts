// O arquivo src/server.ts é o ponto de entrada do servidor Fastify. Ele configura o servidor, registra as rotas e inicia a escuta para as requisições.
// Ele importa as dependências necessárias, incluindo o Fastify e as rotas definidas em src/routers/user.routes.ts. O servidor é configurado para usar um logger para facilitar a depuração e o monitoramento das requisições.
// O servidor é iniciado na porta 3000, e um callback é fornecido para lidar com erros ou para confirmar que o servidor está ouvindo corretamente. O uso do logger integrado do Fastify permite que as mensagens de log sejam registradas de forma estruturada, facilitando a análise e o monitoramento do servidor em produção.  
// dotenv é uma biblioteca que carrega variáveis de ambiente de um arquivo .env para process.env, permitindo que as configurações sensíveis sejam mantidas fora do código-fonte.
import 'dotenv/config';
import fastify from "fastify";
import type {FastifyInstance} from "fastify";
import { userRoutes } from "./routers/user.routers.js";

const app: FastifyInstance = fastify({ logger: true });
app.register(userRoutes, { prefix: '/users' });

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    app.log.error(err);
  } else {
    app.log.info(`Server listening at ${address}`);
    console.log(`Outra forma de envio de mensagem no log...`);
  }
});
