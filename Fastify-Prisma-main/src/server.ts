import fastify from "fastify";
import type { FastifyInstance } from "fastify";


// logger trás algumas informações de log sistema
const app: FastifyInstance = fastify();

app.listen(
    {
        port: 3100,
    },
    () => console.log('Server is running...'),
)